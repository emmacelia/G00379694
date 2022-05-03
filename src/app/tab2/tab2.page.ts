import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
myStatus:string = "";
Resturaunt2:string = "";
Resturaunt3:string = "";
  constructor(private storage: Storage) {}

ionViewDidEnter(){

  this.storage.create()
  .then(()=>{
    this.storage.get('status')
    .then((status)=>{
      this.myStatus = status;
    })
    .catch();
  })
  .catch();


  this.storage.create()
  .then(()=>{
    this.storage.get('res2')
    .then((res2)=>{
      this.Resturaunt2 = res2;
    })
    .catch();
  })
  .catch();


  this.storage.create()
  .then(()=>{
    this.storage.get('res3')
    .then((res3)=>{
      this.Resturaunt3 = res3;
    })
    .catch();
  })
  .catch();

}

ngOnInit(){

}
 
SaveStatus(){
this.storage.create()
.then(()=>{
  this.storage.set("status", this.myStatus)
  .then(()=>{console.log(this.myStatus)})
  .catch();
})
.catch();
}



SaveResturaunt2(){
  this.storage.create()
  .then(()=>{
    this.storage.set("res2", this.Resturaunt2)
    .then(()=>{console.log(this.Resturaunt2)})
    .catch();
  })
  .catch();
  }


  SaveResturaunt3(){
    this.storage.create()
    .then(()=>{
      this.storage.set("res3", this.Resturaunt3)
      .then(()=>{console.log(this.Resturaunt3)})
      .catch();
    })
    .catch();
    }
  }






