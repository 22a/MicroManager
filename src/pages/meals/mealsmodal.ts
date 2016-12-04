import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({ templateUrl: 'modal-template.html' })
export class MealsModal {
  meal;

  constructor(public viewCtrl: ViewController) {
    this.meal = {
      'name': 'Vietnamese Pho',
      'description': "This authentic pho isn't quick, but it is delicious. The key is in the broth, which gets simmered for at least 6 hours",
      'recipe': [
        "Preheat oven to 425 degrees F (220 degrees C).",
        "Place beef bones on a baking sheet and roast in the preheated oven until browned, about 1 hour.",
        "Place onion on a baking sheet and roast in the preheated oven until blackened and soft, about 45 minutes.",
        "Place bones, onion, ginger, salt, star anise, and fish sauce in a large stockpot and cover with 4 quarts of water. Bring to a boil and reduce heat to low. Simmer on low for 6 to 10 hours. Strain the broth into a saucepan and set aside.",
        "Place rice noodles in large bowl filled with room temperature water and allow to soak for 1 hour. Bring a large pot of water to a boil and after the noodles have soaked, place them in the boiling water for 1 minute. Bring stock to a simmer.",
        "Divide noodles among 4 serving bowls; top with sirloin, cilantro, and green onion. Pour hot broth over the top. Stir and let sit until the beef is partially cooked and no longer pink, 1 to 2 minutes. Serve with bean sprouts, Thai basil, lime wedges, hoisin sauce, and chile-garlic sauce on the side.",
      ],
      'imgName': 'pho.jpg'
    };
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
