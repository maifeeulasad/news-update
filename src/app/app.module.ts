import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { NewsElementComponent } from './component/news-element/news-element.component';
import { MatLinkPreviewModule } from '@angular-material-extensions/link-preview';


@NgModule({
  declarations: [
    AppComponent,
    NewsElementComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatLinkPreviewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
