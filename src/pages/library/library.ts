import { QuotesPage } from './../quotes/quotes';
import { NavController } from 'ionic-angular';
import { Category } from './../../data/category.interface';
import { Component, OnInit } from '@angular/core';
import quotes from '../../data/quotes';

@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage implements OnInit {

  quotesCollection: Category[];

  constructor(private navCtrl : NavController){}
  ngOnInit() {
    this.quotesCollection = quotes;
  }

  onSelectCategory(quoteGroups: Category) {
    this.navCtrl.push(QuotesPage, {category : quoteGroups});
    
  }

}
