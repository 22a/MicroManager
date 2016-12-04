import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { Home } from '../pages/home/home';
import { Leaderboard } from '../pages/leaderboard/Leaderboard';
import { Record } from '../pages/record/Record';
import { Signup } from '../pages/signup/Signup';
import { Meals } from '../pages/meals/Meals';
import { MealsModal } from '../pages/meals/MealsModal';
import { Today } from '../pages/today/Today';
import { TodayPop } from '../pages/today/TodayPop';

@NgModule({
  declarations: [
    MyApp,
    Home,
    Leaderboard,
    Record,
    Signup,
    Meals,
    MealsModal,
    Today,
    TodayPop
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
    MealsModal,
    Today,
    TodayPop
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
