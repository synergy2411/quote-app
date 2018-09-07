import { QuoteService } from './../../services/quote.service';
import { Category } from './../../data/category.interface';
import { NavParams, AlertController } from 'ionic-angular';
import { Component, OnInit } from '@angular/core';
import { Quote } from '../../data/quote.interface';

@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit{
  quoteGroup : Category;

  constructor(private navParams : NavParams,
            private quoteService : QuoteService,
            private alertCtrl : AlertController){}

  ngOnInit(){
    this.quoteGroup = this.navParams.get('category');
    console.log(this.quoteGroup);
  }

  onFavorite(quote : Quote){
    const alert = this.alertCtrl.create({
      title : 'Favorite Quote Selected',
      subTitle : 'Are you sure?',
      message : 'Do you really want to favorite it?',
      buttons : [{
        text : 'Yes, Please go ahead',
        handler : ()=>{
          this.quoteService.addQuoteToFavorite(quote)
        }
      },{
        text : 'No, I changed my mind!',
        role : 'cancel',
        handler : ()=>{
          console.log('Cancelled');
        }
      }]
    });

    alert.present();
  }

}
