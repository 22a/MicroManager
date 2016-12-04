import { Component } from '@angular/core';

import { ModalController } from 'ionic-angular';
import { MealsModal } from './MealsModal';

@Component({
  selector: 'meals',
  templateUrl: 'meals.html'
})
export class Meals {
  items;

  constructor(public modalCtrl: ModalController) {
    this.initializeItems();
  }

  initializeItems() {
    this.items = [
      {'name': 'Vietnamese Pho', 'description': 'Zesty noodles in broth!', 'imgName': 'pho.jpg' },
      {'name': 'Spaghetti Bolognaise', 'description': 'An italian classic', 'imgName': 'bolognaise.jpg'},
      {'name': 'Chicken Tikka Masala', 'description': 'A delicious taste of India', 'imgName': 'chicken-tikka.jpg'},
      {'name': 'Butternut Squash Soup', 'description': 'Warm up in Winter with this delicious creamy meal', 'imgName': 'squash-soup.jpg'},
      {'name': 'Cheese Omelette', 'description': 'The perfect eggy brunch', 'imgName': 'cheese-omelette.jpg'},
      {'name': 'Falafel', 'description': 'Crispy, delicious nuggets of joy', 'imgName': 'falafel.jpg'}
    ];
  }

  getItems(ev) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  // modular modals
  openModal() {

    let modal = this.modalCtrl.create(MealsModal);
    modal.present();
  }
}

