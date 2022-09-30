import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { INewsElement } from '../model/INewsElement';

@Injectable({ providedIn: 'root' })
export class RedditNewsService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<INewsElement[]> {
    return (
      this.http
        //.get<any>("https://www.reddit.com/r/news/top.json?limit=100")
        .get<any>('https://www.reddit.com/r/news/top.json')
        .pipe(
          map((res: any) => {
            return res.data.children.map((data: any) => {
              return {
                title: data.data.title,
                url: data.data.url,
              };
            });
          })
        )
    );
  }
}

/*


  getAll(): Observable<INewsElement[][]> {
    return this.http
      .get<any>('https://www.reddit.com/r/news/top.json?limit=100')
      .pipe(
        map((res: any) =>
          Array(Math.ceil(res.data.children.length / 3))
            .fill(1)
            .map((_, index) => index * 3)
            .map((item) =>
              res.data.children.slice(item, item + 3).map((data: any) => ({
                title: data.data.title,
                url: data.data.url,
              }))
            )
        )
      );
  }
*/
