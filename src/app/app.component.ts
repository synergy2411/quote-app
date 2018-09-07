import { FavoritePage } from './../pages/favorite/favorite';
import { SignupPage } from './../pages/signup/signup';
import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, MenuController, IonicApp } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs.page';
import { LoginPage } from '../pages/login/login';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  tabsPage:any = TabsPage;
  loginPage : any = LoginPage;
  signupPage : any = SignupPage;
  
  @ViewChild('nav') nav : NavController;

  constructor(private menuCtrl : MenuController ,platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  openPage(page :any){
    this.nav.setRoot(page);
    this.menuCtrl.close();
  }


}

