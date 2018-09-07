import { Category } from './../../data/category.interface';
import { Component, OnInit } from '@angular/core';
import quotes from '../../data/quotes';

@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage implements OnInit {

  quotesCollection : Category[];

      ngOnInit(){
        this.quotesCollection = quotes;
      }

}
