import { ShoppingListPage } from './../shopping-list/shopping-list';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ReceipesPage } from '../receipes/receipes';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  slPage = ShoppingListPage;
  recepiesPage = ReceipesPage;
}
