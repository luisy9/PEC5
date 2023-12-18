import { Component } from '@angular/core';
import { FormGroup} from '@angular/forms';

@Component({
  selector: 'app-article-new-template',
  templateUrl: './article-new-template.component.html',
  styleUrl: './article-new-template.component.css'
})


export class ArticleNewTemplateComponent {

  article: FormGroup;

  constructor() {
    this.article = new FormGroup({
      name: new FormGroup(''),
      number: new FormGroup(''),
      url: new FormGroup(''),
      onSale: new FormGroup('')
    });
  }

  onSubmit() {

  }

}
