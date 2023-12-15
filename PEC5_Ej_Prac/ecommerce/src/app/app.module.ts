import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './article/article.component';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ArticleListComponent } from './article-list/article-list.component';



@NgModule({
  declarations: [AppComponent, ArticleComponent, ArticleListComponent],
  imports: [BrowserModule, BrowserAnimationsModule],
  bootstrap: [AppComponent]
})
export class AppModule { }

