import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'leaderboard',
  templateUrl: 'leaderboard.html'
})
export class Leaderboard {
  people = [
    {name: 'Tomas Agile',       percent: '99.7%', avatar: 'img/tom.png'},
    {name: 'Gearldine Bueno', percent: '94.3%', avatar: 'img/tam0.jpg'},
    {name: 'Garry Irwin',     percent: '94.2%', avatar: 'img/tom7.jpg'},
    {name: 'Margarie Thornberry-Crow', percent: '93.2%', avatar: 'img/tam1.jpg'},
    {name: 'Bjork Ribery',    percent: '93.1%', avatar: 'img/tam2.jpg'},
    {name: 'Brian McNostril', percent: '92.7%', avatar: 'img/tom0.jpg'},
    {name: 'Francine Berghand', percent: '92.6%', avatar: 'img/tam3.jpg'},
    {name: 'Molly Falkenberg', percent: '92.5%', avatar: 'img/tam4.jpg'},
    {name: 'Bobby Antclint',  percent: '92.4%', avatar: 'img/tom1.jpg'},
    {name: 'Richard Hand',    percent: '92.2%', avatar: 'img/tom6.jpg'},
    {name: 'Sanjay Michaels', percent: '92.1%', avatar: 'img/tom3.jpg'},
    {name: 'Anna Reykj',      percent: '91.9%', avatar: 'img/tam5.jpg'},
    {name: 'Elon Musty',      percent: '91.4%', avatar: 'img/tom4.jpg'},
    {name: 'Shane Tangle',    percent: '90.2%', avatar: 'img/tom5.jpg'},
  ]
  you = {name: '(You) Jon Sudano', percent: "81.2%", avatar: 'img/tom8.jpg', place: "4358"};
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }
}
