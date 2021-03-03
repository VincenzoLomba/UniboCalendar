import { CalendarViewComponent } from './calendar-view/calendar-view.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Custom imports

import { RouterModule } from '@angular/router';
import { ShowCalendarComponent } from './show-calendar/show-calendar.component';
import { OpenCalendarComponent } from './open-calendar/open-calendar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatProgressButtonsModule } from 'mat-progress-buttons';
import { HowToFindNicknameDialogComponent } from 'src/app/dialogs/howtofindnickname/how-to-find-nickname-dialog/how-to-find-nickname-dialog.component';

// Angulr Material imports

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    CalendarViewComponent,
    ShowCalendarComponent,
    OpenCalendarComponent,
    HowToFindNicknameDialogComponent
  ],
  entryComponents: [ HowToFindNicknameDialogComponent ],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressButtonsModule,
    MatDialogModule,
    MatIconModule
  ],
  providers: [],
  exports: [
    CalendarViewComponent,
    OpenCalendarComponent,
    ShowCalendarComponent
  ]
})
export class CalendarModule { }
