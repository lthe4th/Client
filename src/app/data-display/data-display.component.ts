import { Component, OnInit } from '@angular/core';
import { NzTabPosition } from 'ng-zorro-antd';

@Component({
  selector: 'app-data-display',
  templateUrl: './data-display.component.html',
  styleUrls: ['./data-display.component.scss']
})
export class DataDisplayComponent implements OnInit {
  array = [1, 2, 3, 4];
  constructor() { }

  ngOnInit() {
  }
  panels = [
    {
      active: true,
      name: 'This is panel header 1',
      disabled: false
    },
    {
      active: false,
      disabled: false,
      name: 'This is panel header 2'
    },
    {
      active: false,
      disabled: true,
      name: 'This is panel header 3'
    }
  ];

  likes = 0;
  dislikes = 0;
  time = new Date("12/2/22020")

  like(): void {
    this.likes = 1;
    this.dislikes = 0;
  }

  dislike(): void {
    this.likes = 0;
    this.dislikes = 1;
  }
  tabs = [1, 2, 3];
  tabs2 = ['Tab 1', 'Tab 2'];
  closeTab(tab: string): void {
    this.tabs2.splice(this.tabs2.indexOf(tab), 1);
  }

  newTab(): void {
    this.tabs2.push('New Tab');
  }

}
