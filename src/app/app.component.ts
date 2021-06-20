import { Component } from '@angular/core';
import {NewsElementComponent} from "./component/news-element/news-element.component";
import {INewsElement} from "./model/INewsElement";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'news-update';

  newsElements: INewsElement[]

  constructor() {
    this.newsElements=[
      {
        url:'a',
        title:'a',
      },
      {
        url:'b',
        title:'b',
      }
    ]
  }
}
