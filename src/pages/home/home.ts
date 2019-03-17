import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { DownloadPage } from '../download/download';
import { CloudPage } from '../cloud/cloud';
import { SlidesPage } from '../slides/slides'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  gotoAbout(){
    this.navCtrl.setRoot(AboutPage);
  }
    gotoDownload(){
    this.navCtrl.push(DownloadPage);
  }
    gotoCloud(){
     this.navCtrl.push(CloudPage); 
    }
    gotoSlides(){
      this.navCtrl.push(SlidesPage);
    }

}
