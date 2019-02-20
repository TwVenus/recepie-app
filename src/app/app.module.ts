import { TabsPage } from './../pages/tabs/tabs';
import { ShoppingListPage } from './../pages/shopping-list/shopping-list';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { EditRecepiePage } from '../pages/edit-recepie/edit-recepie';
import { ReceipePage } from '../pages/receipe/receipe';
import { ReceipesPage } from '../pages/receipes/receipes';
import { ShoppingListService } from '../services/shopping-list';

@NgModule({
  declarations: [
    MyApp,
    EditRecepiePage,
    ReceipePage,
    ReceipesPage,
    ShoppingListPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    EditRecepiePage,
    ReceipePage,
    ReceipesPage,
    ShoppingListPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ShoppingListService
  ]
})
export class AppModule {}
