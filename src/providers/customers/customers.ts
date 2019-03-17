import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the CustomersProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CustomersProvider {
  data: any;
  constructor(public http: HttpClient) {
    //console.log('Hello CustomersProvider Provider');
    this.data=[
      { id:"1", name:"nut", tel:"081234859",address : "666 ถ.123 ต.นคร อ.เมือง จ.นครปฐม " },
      { id:"2", name:"miv", tel:"095821313",address : "777 ถ.345 ต.นคร อ.เมือง จ.นครปฐม" },
      { id:"3", name:"mana", tel:"081221313",address : "888 ถ.678 ต.นคร อ.เมือง จ.นครปฐม" }
    ];
  }
  loadAll(){
    return Promise.resolve(this.data);
  }

  getCustomerById(id){
    for(var i=0;i<(this.data).length;i++){
      if(this.data[i].id==id){
        return Promise.resolve(this.data[i]);
      }

    }
  }


}
