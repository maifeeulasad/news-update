import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {INewsElement} from "../../model/INewsElement";

@Component({
  selector: 'app-news-element',
  templateUrl: './news-element.component.html',
  styleUrls: ['./news-element.component.css'],
  inputs: ['newsElement']
})
export class NewsElementComponent {

  newsElement: INewsElement
  
  constructor(private http: HttpClient ) {
    this.newsElement = {
      title:'',
      url:''
    }
  }

  apiCallbackFn = (route: string) => {
    return this.http.get(route);
  };
}
