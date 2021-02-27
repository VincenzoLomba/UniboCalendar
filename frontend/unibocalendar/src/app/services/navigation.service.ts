import { Injectable } from '@angular/core';

export enum ScreenSize {
  xs = 'xs', sm = 'sm', md = 'md', lg = 'lg', xl = 'xl'
}

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  private webAppDomain: string = null;
  private screenSize: ScreenSize = null;
  // To enable the feature that make the browser address bar disappear when scrolling on mobiles.
  private addressBarAutoHidingEnabledOnSmallScreens = null;

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
      this.screenSize = ScreenSize[screenSize];
      return true;
    }
    return false;
  }
  getScreenSize(): ScreenSize { return this.screenSize; }
  onSmallScreen(): boolean { return this.screenSize === ScreenSize.xs || this.screenSize === ScreenSize.sm; }

  enableAddressBarAutoHidingOnSmallScreens(): void { this.addressBarAutoHidingEnabledOnSmallScreens = true; }
  disableAddressBarAutoHidingOnSmallScreens(): void { this.addressBarAutoHidingEnabledOnSmallScreens = false; }
  addressBarAutoHidingIsEnabledOnSmallScreens(): boolean { return this.addressBarAutoHidingEnabledOnSmallScreens; }
}
