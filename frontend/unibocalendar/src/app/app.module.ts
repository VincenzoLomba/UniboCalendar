import { CalendarModule } from './modules/calendar/calendar.module';
import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Customm imports:
import { RouterModule, Routes } from '@angular/router';
import { CalendarViewComponent } from './modules/calendar/calendar-view/calendar-view.component';
import { FlexLayoutModule } from '@angular/flex-layout';

// Added by (and for) Angular Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';

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
      scrollPositionRestoration: 'enabled',
      relativeLinkResolution: 'legacy'
    }),
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatProgressBarModule
  ],
  providers: [
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
