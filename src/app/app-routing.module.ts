import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { CalendarComponent } from './calendar/calendar.component';
import { GeneralComponent } from './general/general.component';
import { ButtonComponent } from './button/button.component';
import { IconComponent } from './icon/icon.component';
import { SliderComponent } from './slider/slider.component';
import { ModalComponent } from './modal/modal.component';
import { DrawerComponent } from './drawer/drawer.component';


const routes: Routes = [
  {path:"",redirectTo:"dashboard",pathMatch:"full"},
  {path:"dashboard", component:DashBoardComponent},
  {path:"calendar", component:CalendarComponent},
  {path:"general", component:GeneralComponent},
  {path:"button", component:ButtonComponent},
  {path:"icon", component:IconComponent},
  {path:"slider", component:SliderComponent},
  {path:"modal", component:ModalComponent},
  {path:"drawer", component:DrawerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
