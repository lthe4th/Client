import { Component, OnInit } from '@angular/core';
import { NzNotificationService, NzMessageService } from 'ng-zorro-antd';
@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class GeneralComponent implements OnInit {

  constructor(
    private notification: NzNotificationService,
    private message: NzMessageService,
    private nzMessageService: NzMessageService
  ) { }
  ngOnInit() {
  }
  array = [1, 2, 3, 4];
  dotPosition = 'bottom';
  createNotification(type: string): void {
    this.notification.create(
      type,
      'Notification Title',
      'This is the content of the notification. This is the content of the notification. This is the content of the notification.'
    );
  }

  createMessage(type: string): void {
    this.message.create(type, `This is a message of ${type}`);
  }

  cancel(): void {
    this.nzMessageService.info('click cancel');
  }

  confirm(): void {
    this.nzMessageService.info('click confirm');
  }


}
