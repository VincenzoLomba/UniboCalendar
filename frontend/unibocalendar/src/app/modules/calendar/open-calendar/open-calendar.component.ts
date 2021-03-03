import { Component, OnInit } from '@angular/core';
import { AbstractControlOptions, FormControl, ValidatorFn } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatProgressButtonOptions } from 'mat-progress-buttons';
import { HowToFindNicknameDialogComponent } from 'src/app/dialogs/howtofindnickname/how-to-find-nickname-dialog/how-to-find-nickname-dialog.component';
import { NavigationService, ScreenSize } from 'src/app/services/navigation.service';
import { permaEnvironment } from 'src/environments/permaenvironment';
import { CalendarService } from '../calendar.service';

@Component({
  selector: 'app-new-calendar',
  templateUrl: './open-calendar.component.html',
  styleUrls: ['./open-calendar.component.scss']
})
export class OpenCalendarComponent implements OnInit{

  nicknameFormControl = new NicknameFormControl('', [(control: NicknameFormControl) => NicknameFormControl.validate(control)]);
  submitButtonOptions: MatProgressButtonOptions = {
    active: false,
    text: 'verifica nickname',
    spinnerSize: 18,
    raised: false,
    stroked: true,
    flat: false,
    fab: false,
    buttonColor: 'primary',
    spinnerColor: 'accent',
    fullWidth: false,
    disabled: false,
    mode: 'indeterminate'
  };

  constructor(private navigationService: NavigationService, private calendarService: CalendarService, private dialog: MatDialog) {}

  ngOnInit(): void {}

  showHowToFindNicknameDialog(): void {
    const formValue = this.nicknameFormControl.value;
    this.nicknameFormControl.setValue('');
    this.dialog.open(HowToFindNicknameDialogComponent, { panelClass: 'dialog-padding-', width: '90%', maxWidth: '700px' })
      .afterClosed().subscribe((value: string) => {
        if (value) {
          this.nicknameFormControl.setValue(value);
        } else {
          this.nicknameFormControl.setValue(formValue);
        }
    });
  }

  onNicknameSubmit(): void {
    this.nicknameFormControl.restartValidationAndCheck();
    if (!this.nicknameFormControl.hasErrors()) {
    }
  }

  coursesAvailable(): boolean { return this.calendarService.thereAreSomeAvailableCourses(); }

  screenSizeIsXs(): boolean { return this.navigationService.getScreenSize() === ScreenSize.xs; }
  onSmallScreen(): boolean { return this.navigationService.onSmallScreen(); }
  getWebappMainColor(): string { return permaEnvironment.webappMainColor; }

}

class NicknameFormControl extends FormControl {

  private invalidNickname = false;
  private validationStopped = false;

  static validate(control: NicknameFormControl): { [key: string]: boolean } | null {

    if (control.validationIsStopped()) { return null; }
    const value = control == null ? null : control.value;
    if (value == null || value === '') {
      return { [NicknameFormErrors.req]: true};
    }
    if (value.replace(/\s/g, '') === '') {
      return { [NicknameFormErrors.empty]: true};
    }
    if (value.replace(/\s/g, '') !== value) {
      return { [NicknameFormErrors.withSpaces]: true};
    }
    if (control.invalidNickname) {
      return { [NicknameFormErrors.invalid]: true};
    }
    return null;
  }

  constructor(formState?: any, validatorOrOpts?: ValidatorFn | ValidatorFn[] | AbstractControlOptions) {
    super(formState, validatorOrOpts);
  }

  suspendValidationAndClean(): void{
    this.invalidNickname = false;
    this.validationStopped = true;
    this.updateValueAndValidity();
  }

  suspendValidation(): void{
    this.validationStopped = true;
  }

  validationIsStopped(): boolean { return this.validationStopped; }

  restartValidationAndCheck(): void {
    this.validationStopped = false;
    this.markAsTouched();
    this.updateValueAndValidity();
  }

  restartValidation(): void {
    this.validationStopped = false;
  }

  loadError(): string | null {
    if (this.hasError(NicknameFormErrors.req)) {
      return 'Inserire un nickname';
    }
    if (this.hasError(NicknameFormErrors.empty)) {
      return 'Non inserire unicamente spazi';
    }
    if (this.hasError(NicknameFormErrors.withSpaces)) {
      return 'Non inserire spazi';
    }
    if (this.hasError(NicknameFormErrors.invalid)) {
      return 'Nickname non riconosciuto';
    }
    return null;
  }

  setAsInvalid(): void { this.invalidNickname = true; }

  hasErrors(): boolean {
    return Object.keys(NicknameFormErrors).some((key: string) => this.hasError(key));
  }
}

enum NicknameFormErrors {
  req = 'req',
  empty = 'empty',
  invalid = 'invalid',
  withSpaces = 'spaces'
}
