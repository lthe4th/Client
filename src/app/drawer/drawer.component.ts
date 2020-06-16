import { Component, OnInit } from '@angular/core';
import { NzDrawerPlacement } from 'ng-zorro-antd';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss']
})
export class DrawerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  visible = false;
  placement: NzDrawerPlacement = 'left';
  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }

  data = [
    {
      name: 'Lily'
    },
    {
      name: 'Lily'
    }
  ];

  visible2 = false;

  open2(): void {
    this.visible2 = true;
  }

  close2(): void {
    this.visible2 = false;
  }
}
