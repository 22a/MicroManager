import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'meals',
  templateUrl: 'meals.html'
})
export class Meals {
  items;

  constructor() {
    this.initializeItems();
  }

  initializeItems() {
    this.items = [
      { 'name': 'Vietnamese Pho 0', 'description': 'delicious poop', 'imgName': 'pho.jpg' },
      { 'name': 'Vietnamese Pho 1', 'description': 'delicious poop', 'imgName': 'pho.jpg' },
      { 'name': 'Vietnamese Pho 2', 'description': 'delicious poop', 'imgName': 'pho.jpg' },
      { 'name': 'Vietnamese Pho 3', 'description': 'delicious poop', 'imgName': 'pho.jpg' },
      { 'name': 'Vietnamese Pho 4', 'description': 'delicious poop', 'imgName': 'pho.jpg' },
      { 'name': 'Vietnamese Pho 5', 'description': 'delicious poop', 'imgName': 'pho.jpg' },
      { 'name': 'Vietnamese Pho 6', 'description': 'delicious poop', 'imgName': 'pho.jpg' },
      { 'name': 'Vietnamese Pho 7', 'description': 'delicious poop', 'imgName': 'pho.jpg' },
      { 'name': 'Vietnamese Pho 8', 'description': 'delicious poop', 'imgName': 'pho.jpg' },
      { 'name': 'Vietnamese Pho 9', 'description': 'delicious poop', 'imgName': 'pho.jpg' },
      { 'name': 'Vietnamese Pho 10', 'description': 'delicious poop', 'imgName': 'pho.jpg' }
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
}
