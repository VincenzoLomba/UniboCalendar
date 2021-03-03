import { Course, cleanAndSortCourses } from './calendar.classes';
import { Injectable } from '@angular/core';
import { permaEnvironment } from 'src/environments/permaenvironment';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  constructor() {}

  private availableCourses: Course[] = null;

  /* Loads all the avaiable courses saved in the localStorage OVERRIDING current data.
   * This method MUST be called on the webapp's startup (in the AppComponent)!
   */
  loadAvailableCourses(): void {

    let ac: Course[];
    try {
      ac = JSON.parse(localStorage.getItem(permaEnvironment.localStorage.savedCourses));
    } catch (error) {
      localStorage.setItem(permaEnvironment.localStorage.savedCourses, null);
      this.availableCourses = null;
      return;
    }
    if (ac == null || ac.length === 0) {
      this.availableCourses = null;
      return;
    }
    this.availableCourses = cleanAndSortCourses(ac);
  }

  thereAreSomeAvailableCourses(): boolean { return this.availableCourses != null && this.availableCourses.length !== 0; }

}
