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
    this.mains = this.shuffle([ 'Beef', 'Beef Heart', 'Beef Liver', 'Beef Tongue', 'Bone Soup', 'Buffalo', 'Bison', 'Calf liver', 'Caribou', 'Goat', 'Ham', 'Horse', 'Kangaroo', 'Lamb', 'Marrow soup', 'Moose', 'Mutton', 'Opossum', 'Organ Meats', 'Pork', 'Pork', 'Bacon', 'Rabbit', 'Snake', 'Squirrel', 'Sweetbreads', 'Tripe', 'Turtle', 'Veal', 'Venison', 'Chicken', 'Chicken Liver', 'Cornish Game Hen', 'Duck', 'Duck Liver', 'Emu', 'Gizzards', 'Goose', 'Goose Liver', 'Grouse', 'Guinea Hen', 'Liver', 'Organs', 'Ostrich', 'Partridge', 'Pheasant', 'Quail', 'Squab', 'Turkey', 'Monkfish', 'Pulses' ]);
  }

  initializeSides() {
    this.sides = this.shuffle([ 'Aavakaaya', 'Arab salad', 'Baba ghanoush', 'Biryani', 'Borscht', 'Broccoli slaw', 'Cabbage roll', 'Caesar salad', 'Caldo verde', 'Caprese salad', 'Carrot salad', 'Ciambotta', 'Chile relleno', 'Chiles en nogada', 'Coleslaw', 'Collard liquor', 'Confit byaldi', 'Corn chowder', 'Crudités', 'Cucumber soup', 'Ema datshi', 'Főzelék', 'Fried aubergine', 'Fried cauliflower', 'Ful medames', 'Gado-gado', 'Garden salad', 'Ghormeh sabzi', 'Giardiniera', 'Glasswort salad', 'Goma-ae', 'Greek salad', 'Green papaya salad', 'Green bean casserole', 'Guacamole', 'Hodge-Podge (soup)', 'İmam bayıldı', 'Israeli salad', 'Jalapeño popper', 'Janssons frestelse', 'Karedok', 'Kimchi', 'Kinilnat', 'Kosambari', 'Kuluban', 'Lawar (food)', 'Lecsó', 'Lettuce sandwich', 'Maple slaw', 'Mashed pumpkin', 'Mattar paneer', 'Meigan cai', 'Mixed pickle', 'Onion ring', 'Pao cai', 'Pasta primavera', 'Pea soup', 'Piccalilli', 'Pickled cucumber', 'Pico de gallo', 'Potato salad', 'Ratatouille', 'Rojak', 'Salad Niçoise', 'Salsa (sauce)', 'Samlar machu', 'Sauerkraut', 'Senate bean soup', 'Sicilian orange salad', 'Sorrel soup', 'Spinach salad', 'Spreewald gherkins', 'Stuffed peppers', 'Stuffed zucchini', 'Suan cai', 'Sweet potato pie', 'Sweet sour and spicy vegetable gravy', 'Tabbouleh', 'Texas caviar', 'Thai salads', 'Tianjin preserved vegetable', 'Tomato omelette', 'Tomato soup', 'Turnip cake', 'Ulam (salad)', 'Urap', 'Utan', 'Vegetable chips', 'Vegetable sandwich', 'Vegetable tarkari', 'Vegetarian chili', 'Vichyssoise', 'Waldorf salad', 'Zha cai' ]);
  }

  getMains(ev) {
    // Reset items back to all of the items
    this.initializeMains();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.mains = this.mains.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
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
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  shuffle(a) {
    for (let i = a.length; i; i--) {
      let j = Math.floor(Math.random() * i);
      [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
    return a;
  };

  goToHome() {
    this.navCtrl.setRoot(Home);
  }
}

