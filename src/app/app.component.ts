import { Component } from '@angular/core';
import { NgxMasonryOptions } from 'ngx-masonry';
import { INewsElement } from './model/INewsElement';
import { RedditNewsService } from './service/reddit-news.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: false,
})
export class AppComponent {
  title = 'news-update';
  console = console;

  newsElements: INewsElement[] = [];

  masonryOptions: NgxMasonryOptions = {
    gutter: 16,
    fitWidth: true,
  };

  constructor(private newsService: RedditNewsService) {
    newsService.getAll().subscribe((res) => {
      this.newsElements = res;
    });
  }
}
