import { CalendarViewComponent } from './calendar-view/calendar-view.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    CalendarViewComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [],
  exports: [
    CalendarViewComponent
  ]
})
export class CalendarModule { }
