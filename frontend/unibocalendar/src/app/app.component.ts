import { environment } from './../environments/environment';
import { NavigationService } from './services/navigation.service';
import { permaEnvironment } from './../environments/permaenvironment';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { filter, map } from 'rxjs/operators';
import { CalendarService } from './modules/calendar/calendar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  public loadingAppComponent = true;

  constructor(
    private titleService: Title,
    private mediaObserver: MediaObserver,
    private navigationService: NavigationService,
    private calendarService: CalendarService
  ){}

  ngOnInit(): void {

    // Updating the webapp title:
    this.titleService.setTitle(permaEnvironment.webappTitle);

    // Watching the size of the webapp page:
    this.mediaObserver.asObservable().pipe(
      filter((changes: MediaChange[]) => changes.length > 0),
      map((changes: MediaChange[]) => changes[0])
    ).subscribe((change: MediaChange) => {
      this.navigationService.setScreenSize(change.mqAlias);
      console.log('Device size updated: ' + this.navigationService.getScreenSize());
    });

    // Retriving the WebApp Domain
    if (environment.production) {
      let url = window.location.href;
      url = url.slice(url.indexOf('//') + 2);
      url = url.slice(0, url.indexOf('/'));
      this.navigationService.setWebAppDomain(url);
    } else {
      /* While producing, connect to the localhost with port 8080 */
      this.navigationService.setWebAppDomain('localhost:8080');
    }
    console.log('WebApp Domain: \'' + this.navigationService.getWebAppDomain() + '\'');

    // Set the browser bar auto disappearing on scrolling policy
    this.navigationService.disableAddressBarAutoHidingOnSmallScreens();

    // Loading saved courses for the current user
    this.calendarService.loadAvailableCourses();

    this.loadingAppComponent = false;
  }

  onSmallScreen(): boolean { return this.navigationService.onSmallScreen(); }
  getToolbarElevation(): number { return permaEnvironment.toolbarElevation; }
  addressBarAutoHidingOnSmallScreensIsEnabled(): boolean { return this.navigationService.addressBarAutoHidingOnSmallScreensIsEnabled(); }
  smallScreenToolbarHeight(): number { return permaEnvironment.smallScreenToolbarHeight; }
  sidenavModeIsSideOnBigScreens(): boolean { return permaEnvironment.sidenavModeIsSideOnBigScreens; }
  getWebappTitle(): string { return permaEnvironment.webappTitle; }
}

