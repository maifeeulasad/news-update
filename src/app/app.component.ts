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

  newsElements: INewsElement[] = []

  constructor(private newsService: RedditNewsService) {
    newsService.getAll().subscribe(res=>{
      this.newsElements=res
      console.debug(res)
    })
  }
}
