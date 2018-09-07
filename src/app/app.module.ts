import { TabsPage } from './../pages/tabs/tabs.page';
import { QuotePage } from './../pages/quote/quote';
import { QuotesPage } from './../pages/quotes/quotes';
import { LibraryPage } from './../pages/library/library';
import { FavoritePage } from './../pages/favorite/favorite';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';



@NgModule({
  declarations: [
    MyApp,

    FavoritePage,
    LibraryPage,
    QuotesPage,
    QuotePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,

    FavoritePage,
    LibraryPage,
    QuotesPage,
    QuotePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
