import { Component, OnInit } from '@angular/core';
import { DateRangePopupComponent } from 'ng-zorro-antd/date-picker/lib/popups/date-range-popup.component';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})



export class CalendarComponent implements OnInit {

  constructor() { }
  today = new Date();
  scheduleDatePicker = new Date();
  ngOnInit() {
  }
  items = [
    {
      date: new Date('2020-06-15'),
      message: ["a thing todo", "a thing to do 2"]

    },
    {
      date: new Date('2020-06-16'),
      message: ["YO dude"]
    },

  ]

  AddSchedule(schedule:string) {
    schedule = schedule.trim();
    if (schedule === "") {
      alert(`schedule can't be emplty`);
      return;
    }
    let obj = {
      date : new Date(),
      message:[] 
    }
    obj.date = this.scheduleDatePicker;
    obj.message.push(schedule);
    this.items.push(obj);
  }




}


