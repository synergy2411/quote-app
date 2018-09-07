import { Category } from './../../data/category.interface';
import { NavParams } from 'ionic-angular';
import { Component, OnInit } from '@angular/core';
import { Quote } from '../../data/quote.interface';

@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit{
  quoteGroup : Category;

  constructor(private navParams : NavParams){}

  ngOnInit(){
    this.quoteGroup = this.navParams.get('category');
    console.log(this.quoteGroup);
  }

  onFavorite(quote : Quote){
    console.log(quote);
  }

}
