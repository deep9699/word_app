import { Component } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  slider: IonSlides;

  constructor() {}

  slidesDidLoad(mySlider: IonSlides)
  {
    this.slider = mySlider;
    mySlider.startAutoplay();
  }

}
