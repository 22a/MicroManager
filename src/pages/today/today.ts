import { Component } from '@angular/core';

import { NavController, PopoverController } from 'ionic-angular';
import { TodayPop } from './TodayPop'

@Component({
  selector: 'today',
  templateUrl: 'today.html'
})
export class Today{
  micros;

  constructor(public navCtrl: NavController, public popoverCtrl: PopoverController) {
    this.micros = [
      { 'name': 'Zinc', 'width': '83%' },
      { 'name': 'Calcium', 'width': '80%' },
      { 'name': 'Sodium', 'width': '78%' },
      { 'name': 'Teeth', 'width': '75%' },
      { 'name': 'Zinc', 'width': '69%'},
      { 'name': 'Sodium', 'width': '55%' },
      { 'name': 'Iron', 'width': '45%' },
      { 'name': 'Vital', 'width': '38%' },
      { 'name': 'Earth', 'width': '25%' },
      { 'name': 'Oil', 'width': '14%' },
      { 'name': 'Boron', 'width': '8%' },
      { 'name': 'Teeth', 'width': '5%' }
    ]
  }

  presentPopover() {
    let popover = this.popoverCtrl.create(TodayPop);
    popover.present();
  }
}
