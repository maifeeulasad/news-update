import { Component, OnInit } from '@angular/core';
import {INewsElement} from "../../model/INewsElement";

@Component({
  selector: 'app-news-element',
  templateUrl: './news-element.component.html',
  styleUrls: ['./news-element.component.css'],
  inputs: ['newsElement']
})
export class NewsElementComponent implements OnInit {

  newsElement: INewsElement

  constructor() {
    this.newsElement = {
      title:'',
      url:''
    }
  }

  ngOnInit(): void {
  }

}
