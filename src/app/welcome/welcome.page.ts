import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule, NgStyle } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonToolbar, IonButton, IonText, IonFooter, IonicSlides } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
  standalone: true,
  imports: [IonFooter, IonText, IonButton, IonToolbar, IonContent, RouterLink, NgStyle],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class WelcomePage implements OnInit {

  onboardingScreens = [
    {image: '1.jpg'},
    {image: '2.jpg'},
    {image: '3.jpg'}
  ];

  swiperModules = [IonicSlides];

  constructor() { }

  ngOnInit() {
  }

}
