import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { Home } from '../pages/home/home';
import { Leaderboard } from '../pages/leaderboard/Leaderboard';
import { Record } from '../pages/record/Record';
import { Signup } from '../pages/signup/Signup';
import { Meals } from '../pages/meals/Meals';
import { Today } from '../pages/today/Today';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = Signup;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform) {
    this.initializeApp();

    // some of these are just here for show, nav to home when clicked
    this.pages = [
      { title: 'Home', component: Home },
      { title: 'Leaderboard', component: Leaderboard },
      { title: 'Today', component: Today },
      { title: 'Record a Meal', component: Record },
      { title: 'Meals', component: Meals },
      { title: 'Settings', component: Home },
      { title: 'Add Friends', component: Home }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
