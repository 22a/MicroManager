import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
// import { Today } from '../today/Today';
import { Leaderboard } from '../leaderboard/Leaderboard';
// import { Meals } from '../meals/Meals';
import { Record } from '../record/Record';

@Component({
  selector: 'home',
  templateUrl: 'home.html'
})
export class Home {

  constructor(public navCtrl: NavController) {
  }

  goToToday(){
    // this.navCtrl.push(Today);
    console.log("today page doesn't exist yet, when it does uncomment the above");
  }
  goToLeaderboard(){
    this.navCtrl.push(Leaderboard);
  }
  goToMeals(){
    // this.navCtrl.push(Meals);
    console.log("meal page doesn't exist yet, when it does uncomment the above");
  }
  goToRecord(){
    this.navCtrl.push(Record);
  }

}
