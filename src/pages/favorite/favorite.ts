import { QuotePage } from './../quote/quote';
import { QuoteService } from './../../services/quote.service';
import { Component, OnInit } from '@angular/core';
import { Quote } from '../../data/quote.interface';
import { ModalController } from 'ionic-angular';

@Component({
  selector: 'page-favorite',
  templateUrl: 'favorite.html',
})
export class FavoritePage implements OnInit{

  favoriteQuotes : Quote[];

  constructor(private quoteService : QuoteService,
            private modalCtrl : ModalController){}

  ngOnInit(){
    this.favoriteQuotes = this.quoteService.getFavoriteQuotes();  
  
  }

  onSelect(quote : Quote){
    const modal = this.modalCtrl.create(QuotePage, { quote : quote});
    modal.present();
  }
}
