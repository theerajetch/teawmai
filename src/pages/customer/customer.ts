import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CustomersProvider } from '../../providers/customers/customers';
import { CustomerdetailPage } from '../customerdetail/customerdetail';

/**
 * Generated class for the CustomerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-customer',
  templateUrl: 'customer.html',
})
export class CustomerPage {
  allcusts : any = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams, public data: CustomersProvider) {

    this.data.loadAll().then(result=>{ this.allcusts = result});

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomerPage');
  }

  showCustomer(custid){
    this.navCtrl.push(CustomerdetailPage,{id: custid});
  }

}
