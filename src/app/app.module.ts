import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { CalendarComponent } from './calendar/calendar.component';
import { GeneralComponent } from './general/general.component';
import { ButtonComponent } from './button/button.component';
import { IconComponent } from './icon/icon.component';
import { SliderComponent } from './slider/slider.component';
import { ModalComponent } from './modal/modal.component';
import { DrawerComponent } from './drawer/drawer.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    DashBoardComponent,
    CalendarComponent,
    GeneralComponent,
    ButtonComponent,
    IconComponent,
    SliderComponent,
    ModalComponent,
    DrawerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
