import { Component, OnInit } from '@angular/core';
import { INewsElement } from '../../model/INewsElement';
import * as htmlMetadataParser from 'html-metadata-parser';

interface IOg {
  description?: string;
  image?: string;
}

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

  ogToNewsElement({ description, image }: IOg) {
    this.newsElement.description = description;
    this.newsElement.image = image;
  }

  fetchOg(): Promise<IOg> {
    return new Promise((resolve) => {
      htmlMetadataParser
        .parse(this.newsElement.url)
        .then(({ og }: { og: IOg }) => {
          resolve(og);
        })
        .catch(() => {
          htmlMetadataParser
            .parse('https://proxy-server-mua.herokuapp.com/proxy', {
              method: 'POST',
              data: {
                url: this.newsElement.url,
              },
            })
            .then(({ og }: { og: IOg }) => {
              resolve(og);
            })
            .catch(() => {
              resolve({ image: './assets/news.jpg' });
            });
        });
    });
  }

  ngOnInit(): void {
    this.newsElement.image = './assets/loading.gif';
    this.fetchOg().then((og) => {
      this.ogToNewsElement(og);
    });
  }
}
