import { Injectable } from "@angular/core";
import { Quote } from "../data/quote.interface";

@Injectable()
export class QuoteService {
    favoriteQuotes : Quote[] = [];

    addQuoteToFavorite(quote : Quote){
        this.favoriteQuotes.push(quote);
        console.log(this.favoriteQuotes);
    }
    
    getFavoriteQuotes(){
        return this.favoriteQuotes;
    }
}