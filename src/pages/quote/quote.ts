import { NavParams, ViewController } from 'ionic-angular';
import { Component, OnInit } from '@angular/core';
import { Quote } from '../../data/quote.interface';

@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html',
})
export class QuotePage implements OnInit{

  quote : Quote;
  constructor(private navParams : NavParams,
            private viewCtrl : ViewController ){}

  ngOnInit(){
   this.quote = this.navParams.get('quote');
   console.log(this.quote);
  }

  onClose(remove : boolean = false){
    this.viewCtrl.dismiss(remove);
  }
}
