import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import {INewsElement} from "../model/INewsElement";

@Injectable({ providedIn: "root" })
export class RedditNewsService {
  loading: boolean = false;

  constructor(private http: HttpClient) {

  }

  getAll(): Observable<INewsElement[]> {
    this.loading = true;
    return this
      .http
      .get<any>("https://www.reddit.com/r/news/top.json")
      .pipe(map((res: any) => {
        this.loading = false;
        return res.data.children.map((data:any)=>{
          return {
            title:data.data.title,
            url:data.data.url
          }
        })
      }))
  }

}
