import {Component, OnInit} from '@angular/core';

import {store} from "./storage";
import {NotationService} from "./notation.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(public notation: NotationService){}

  category = this.notation.category;
  title = 'Note-app';

  ngOnInit(): void{
  }
}
