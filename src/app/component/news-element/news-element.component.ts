import { Component, OnInit } from '@angular/core';
import { INewsElement } from '../../model/INewsElement';
import * as htmlMetadataParser from 'html-metadata-parser';

@Component({
  selector: 'app-news-element',
  templateUrl: './news-element.component.html',
  styleUrls: ['./news-element.component.css'],
  inputs: ['newsElement'],
})
export class NewsElementComponent implements OnInit {
  newsElement: INewsElement;

  constructor() {
    this.newsElement = {
      title: '',
      url: '',
    };
  }

  ngOnInit(): void {
    this.newsElement.image = './assets/loading.gif';
    htmlMetadataParser
      .parse(this.newsElement.url)
      .then(({ og }) => {
        const { description, image } = og;
        this.newsElement.description = description;
        this.newsElement.image = image;
      })
      .catch(() => {
        this.newsElement.image = './assets/news.jpg';
      });
  }
}
