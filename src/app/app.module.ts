import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { Home } from '../pages/home/home';
import { Leaderboard } from '../pages/leaderboard/Leaderboard';
import { Record } from '../pages/record/Record';
import { Signup } from '../pages/signup/Signup';
import { Meals } from '../pages/meals/Meals';
import { MealsModal } from '../pages/meals/MealsModal';

@NgModule({
  declarations: [
    MyApp,
    Home,
    Leaderboard,
    Record,
    Signup,
    Meals,
    MealsModal
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
    Signup,
    Meals,
    MealsModal
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
