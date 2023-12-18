import { NgModule } from '@angular/core';
import { ArticleComponent } from './article/article.component';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ArticleListComponent } from './article-list/article-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [AppComponent, ArticleComponent, ArticleListComponent, NavbarComponent],
  imports: [BrowserModule, BrowserAnimationsModule, MatIconModule, MatButtonModule],
  bootstrap: [AppComponent]
})
export class AppModule { }

