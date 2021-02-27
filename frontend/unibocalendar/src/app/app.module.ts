import { CalendarModule } from './modules/calendar/calendar.module';
import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';
import { CalendarViewComponent } from './modules/calendar/calendar-view/calendar-view.component';

const appRoutes: Routes = [
  {
    path: '', component: CalendarViewComponent
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CalendarModule,
    RouterModule.forRoot(appRoutes, {
      /* Reference: https://angular.io/api/router/ExtraOptions
       *
       * UseHash for Apache Tomcat:
       * https://stackoverflow.com/questions/56363680/angular-routing-not-working-when-deployed-to-tomcat-9-ubuntu-18-04
       * (notice that ApacheTomcat is not part of this project in the first place BUT it might will be in future releases)
       */
      useHash: true,
      scrollPositionRestoration: 'enabled'
    })
  ],
  providers: [
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
