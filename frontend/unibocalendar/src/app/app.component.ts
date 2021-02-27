import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  webappTitle = 'Unibo Calendar';

  constructor(private titleService: Title){}

  ngOnInit(): void {

    this.titleService.setTitle(this.webappTitle);
  }


}
