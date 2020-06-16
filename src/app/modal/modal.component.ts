import { Component, OnInit } from '@angular/core';
import { NzModalService, NzModalRef } from 'ng-zorro-antd';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  isVisible = false;
  isVisible1 = false;
  confirmModal?: NzModalRef; // For testing by now
  constructor(private modal: NzModalService) { }
  isOkLoading = false;
  ngOnInit() {
  }
  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }

  info(): void {
    this.modal.info({
      nzTitle: 'This is a notification message',
      nzContent: '<p>some messages...some messages...</p><p>some messages...some messages...</p>',
      nzOnOk: () => console.log('Info OK')
    });
  }

  success(): void {
    this.modal.success({
      nzTitle: 'This is a success message',
      nzContent: 'some messages...some messages...'
    });
  }

  error(): void {
    this.modal.error({
      nzTitle: 'This is an error message',
      nzContent: 'some messages...some messages...'
    });
  }

  warning(): void {
    this.modal.warning({
      nzTitle: 'This is an warning message',
      nzContent: 'some messages...some messages...'
    });
  }
  showModal1(): void {
    this.isVisible1 = true;
  }

  handleOk1(): void {
    this.isOkLoading = true;
    setTimeout(() => {
      this.isVisible1 = false;
      this.isOkLoading = false;
    }, 3000);
  }
  
  showConfirm(): void {
    this.confirmModal = this.modal.confirm({
      nzTitle: 'Do you Want to delete these items?',
      nzContent: 'When clicked the OK button, this dialog will be closed after 1 second',
      nzOnOk: () =>
        new Promise((resolve, reject) => {
          setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
        }).catch(() => console.log('Oops errors!'))
    });
  }
}
