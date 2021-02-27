import { environment } from './../environments/environment';
import { NavigationService } from './services/navigation.service';
import { permaEnvironment } from './../environments/permaenvironment';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(
    private titleService: Title,
    private mediaObserver: MediaObserver,
    private navigationService: NavigationService)
  {}

  ngOnInit(): void {

    // Updating the application Title:
    this.titleService.setTitle(permaEnvironment.webappTitle);

    // Watching the size of the webapp page:
    this.mediaObserver.asObservable().pipe(
      filter((changes: MediaChange[]) => changes.length > 0),
      map((changes: MediaChange[]) => changes[0])
    ).subscribe((change: MediaChange) => {
      console.log('Device size updated: ' + change.mqAlias);
      this.navigationService.setScreenSize(change.mqAlias);
    });

    // Retriving the WebApp Domain
    if (environment.production) {
      let url = window.location.href;
      url = url.slice(url.indexOf('//') + 2);
      url = url.slice(0, url.indexOf('/'));
      this.navigationService.setWebAppDomain(url);
    } else {
      this.navigationService.setWebAppDomain('localhost:8080');
    }
    console.log('WebApp Domain: \'' + this.navigationService.getWebAppDomain() + '\'');
  }

}
