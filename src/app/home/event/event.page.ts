import { DatePipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonContent, IonHeader, IonButtons, IonToolbar, IonBackButton, IonItem, IonLabel, IonCol, IonIcon, IonRow } from "@ionic/angular/standalone";
import { events } from 'src/app/data/events';
import { Event } from 'src/app/interfaces/event.interface';
import { calendarOutline, locationOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-event',
  templateUrl: './event.page.html',
  styleUrls: ['./event.page.scss'],
  standalone: true,
  imports: [IonRow, IonIcon, IonCol, IonLabel, IonItem, IonBackButton, IonToolbar, IonButtons, IonHeader, IonContent, DatePipe, ]
})
export class EventPage implements OnInit {
  
  event! : Event;
  private route = inject(ActivatedRoute);

  constructor() { 
    addIcons({calendarOutline, locationOutline})
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log("event id:", id);
    if(id){
      this.getEvent(id);
    }
  }

  getEvent(id : string){
    this.event = events.find(event => event.id == id)!;
  }
}
