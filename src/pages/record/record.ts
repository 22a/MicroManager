import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Home } from '../home/home';

@Component({
  selector: 'record',
  templateUrl: 'record.html'
})
export class Record {
  mains;
  sides;
  mealType: string = "mains";

  constructor(public navCtrl: NavController) {
    this.initializeMains();
    this.initializeSides();
  }

  initializeMains() {
    this.mains = [
      {'name': 'Beef', 'description': 'Zesty noodles in broth!'},
      {'name': 'Chicken', 'description': 'An italian classic'},
      {'name': 'Lamb', 'description': 'A delicious taste of India'},
      {'name': 'Chickpeas', 'description': 'Warm up in Winter with this delicious creamy meal'},
      {'name': 'Monkfish', 'description': 'The perfect eggy brunch'},
      {'name': 'Beef', 'description': 'Zesty noodles in broth!'},
      {'name': 'Chicken', 'description': 'An italian classic'},
      {'name': 'Lamb', 'description': 'A delicious taste of India'},
      {'name': 'Chickpeas', 'description': 'Warm up in Winter with this delicious creamy meal'},
      {'name': 'Monkfish', 'description': 'The perfect eggy brunch'},
      {'name': 'Pulses', 'description': 'Crispy, delicious nuggets of joy'}
    ];
  }

  initializeSides() {
    this.sides = [
      {'name': 'Vietnamese Pho', 'description': 'Zesty noodles in broth!'},
      {'name': 'Spaghetti Bolognaise', 'description': 'An italian classic'},
      {'name': 'Chicken Tikka Masala', 'description': 'A delicious taste of India'},
      {'name': 'Butternut Squash Soup', 'description': 'Warm up in Winter with this delicious creamy meal'},
      {'name': 'Cheese Omelette', 'description': 'The perfect eggy brunch'},
      {'name': 'Falafel', 'description': 'Crispy'}
    ];
  }

  getMains(ev) {
    // Reset items back to all of the items
    this.initializeMains();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.mains = this.mains.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  getSides(ev) {
    // Reset items back to all of the items
    this.initializeSides();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.sides = this.sides.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  goToHome() {
    this.navCtrl.setRoot(Home);
  }
}

