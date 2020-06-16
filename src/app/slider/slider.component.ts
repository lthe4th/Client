import { Component, OnInit } from '@angular/core';
import { NzMarks } from 'ng-zorro-antd';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  disabled = false;
  value1 = 30;
  value2 = [20, 50];
  constructor() { }
  style = {
    float: 'left',
    height: '300px',
    marginLeft: '70px'
  };
  markss = {
    0: '0°C',
    26: '26°C',
    37: '37°C',
    100: {
      style: {
        color: '#f50'
      },
      label: '<strong>100°C</strong>'
    }
  };
  ngOnInit() {
  }
  marks: NzMarks = {
    0: '0°C',
    26: '26°C',
    37: '37°C',
    100: {
      style: {
        color: '#f50'
      },
      label: '<strong>100°C</strong>'
    }
  };

  changeMarks(): void {
    this.marks = {
      20: '20%',
      99: '99%'
    };
  }
}
