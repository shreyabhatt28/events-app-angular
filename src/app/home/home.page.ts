import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { IonHeader, IonList,IonListHeader, IonToolbar, IonLabel, IonContent, IonItem, IonIcon, IonText, IonFabButton,IonBadge, IonRow, IonCol, IonSearchbar, IonicSlides } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { locateOutline, locationOutline, notificationsOutline, optionsOutline } from 'ionicons/icons';
import { Category } from '../interfaces/category.interface';
import { Event } from '../interfaces/event.interface';
import { events } from '../data/events';
import { RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonList,IonListHeader, IonToolbar, IonContent,IonItem, IonLabel,IonIcon,IonText,IonFabButton,IonBadge, IonRow,  IonCol,IonSearchbar, RouterLink, DatePipe],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class HomePage implements OnInit{
  swiperModules = [IonicSlides];
  upcomingEvents : Event[] = [];
  currentEvents : Event[] = [];
  categories : Category[] = [];

  ngOnInit(): void {
    this.upcomingEvents = [...events];
  }
  
  constructor() {
    addIcons({ locateOutline, notificationsOutline, optionsOutline, locationOutline })
  }
}
