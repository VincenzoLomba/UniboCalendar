import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  private webAppDomain: string = null;
  private screenSize: string = null;

  constructor() { }

  setWebAppDomain(webAppDomain: string): void { this.webAppDomain = webAppDomain; }
  getWebAppDomain(): string { return this.webAppDomain; }

  /* Possible device sizes:
   * (reference: https://github.com/angular/flex-layout/wiki/MediaObserver)
   * xs : 0-599 px (usually used to detect mobile device)
   * sm : 600-959 px
   * md : 960-1279 px
   * lg : 1280-1919 px
   * xl : 1920-... px
   */
  setScreenSize(screenSize: string): boolean {
    if (screenSize === 'xs' || screenSize === 'sm' || screenSize === 'md' || screenSize === 'lg' || screenSize === 'xl') {
      this.screenSize = screenSize;
      return true;
    }
    return false;
  }

}
