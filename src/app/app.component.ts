import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import { RoutePage } from '../pages/route/route';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
    @ViewChild(Nav) nav: Nav;
    //rootPage :any =  TabsPage;
    rootPage:any =  LoginPage;
    

  constructor(public platform: Platform,public  statusBar: StatusBar,public splashScreen: SplashScreen) {
      this.initializeApp();
      
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
    }

    initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}



