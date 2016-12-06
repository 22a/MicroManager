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
      { 'name': 'Fiber', 'width': '80%', 'color': '#7abe23' },
      { 'name': 'Zinc', 'width': '80%', 'color': '#7abe23' },
      { 'name': 'Calcium', 'width': '80%', 'color': '#7abe23' },
      { 'name': 'Sodium', 'width': '78%', 'color': '#7abe23' },
      { 'name': 'Protein', 'width': '75%', 'color': '#7abe23' },
      { 'name': 'Fat', 'width': '71%', 'color': '#7abe23' },
      { 'name': 'Zinc', 'width': '69%', 'color': '#fecd51' },
      { 'name': 'Niacin', 'width': '63%', 'color': '#fecd51' },
      { 'name': 'Sodium', 'width': '55%', 'color': '#fecd51' },
      { 'name': 'Iron', 'width': '45%', 'color': '#fecd51' },
      { 'name': 'Vital', 'width': '38%', 'color': '#fecd51' },
      { 'name': 'Earth', 'width': '25%', 'color': '#dc524a' },
      { 'name': 'Oil', 'width': '14%', 'color': '#dc524a' },
      { 'name': 'Boron', 'width': '8%', 'color': '#dc524a' },
      { 'name': 'Teeth', 'width': '5%', 'color': '#dc524a' }
    ]
  }

  presentPopover() {
    let popover = this.popoverCtrl.create(TodayPop);
    popover.present();
  }
}
