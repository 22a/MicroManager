import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { Home } from '../pages/home/home';
import { Leaderboard } from '../pages/leaderboard/Leaderboard';
import { Record } from '../pages/record/Record';
import { Suggest } from '../pages/suggest/Suggest';
import { Signup } from '../pages/signup/Signup';

@NgModule({
  declarations: [
    MyApp,
    Home,
    Leaderboard,
    Record,
    Suggest,
    Signup
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Home,
    Leaderboard,
    Record,
    Suggest,
    Signup
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
