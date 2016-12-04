import { Component } from '@angular/core';

import { NavController, ActionSheetController } from 'ionic-angular';
import { Home } from '../home/home';

@Component({
  selector: 'signup',
  templateUrl: 'signup.html'
})
export class Signup{

  measurement = "metric";

  constructor(public navCtrl: NavController, public actionSheetCtrl: ActionSheetController) {
  }

  goToHome() {
    this.navCtrl.setRoot(Home);
  }

  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Upload Profile Picture',
      buttons: [
        {
          text: 'Take Photo',
          handler: () => {
            console.log('the guzzler wants to take a new photo, wowee, who cares');
          }
        },{
          text: 'Choose from Camera Roll',
          handler: () => {
            console.log('the gripplem wants to choose a photo they\'ve photoshopped');
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('chickened out innit');
          }
        }
      ]
    });
    actionSheet.present();
  }
}
