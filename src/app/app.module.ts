import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms';

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
import { FormsComponent } from './forms/forms.component';
import { TableComponent } from './table/table.component';
import { FormExampleComponent } from './form-example/form-example.component';
import { DataDisplayComponent } from './data-display/data-display.component';

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
    DrawerComponent,
    FormsComponent,
    TableComponent,
    FormExampleComponent,
    DataDisplayComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
