import { Component } from '@angular/core';
import {NewsElementComponent} from "./component/news-element/news-element.component";
import {INewsElement} from "./model/INewsElement";
import {RedditNewsService} from "./service/reddit-news.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'news-update';

  newsElements: INewsElement[]

  constructor(private newsService: RedditNewsService) {
    this.newsElements=[
      {
        url:'a',
        title:'a',
      },
      {
        url:'b',
        title:'b',
      }
    ];
    newsService.getAll().subscribe(res=>{
      console.debug("res")
      console.debug(res)
    })
  }
}
