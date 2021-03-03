import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { permaEnvironment } from 'src/environments/permaenvironment';

@Component({
  selector: 'app-how-to-find-nickname-dialog',
  templateUrl: './how-to-find-nickname-dialog.component.html',
  styleUrls: ['./how-to-find-nickname-dialog.component.scss']
})
export class HowToFindNicknameDialogComponent {

  constructor(public dialogRef: MatDialogRef<HowToFindNicknameDialogComponent>) {}

  getWebappMainColor(): string { return permaEnvironment.webappMainColor; }
}
