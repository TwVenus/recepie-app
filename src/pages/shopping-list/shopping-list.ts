import { Ingredient } from '../../models/ingredients';
import { ShoppingListService } from './../../services/shopping-list';
import { Component, NgModule } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'page-shopping-list',
  templateUrl: 'shopping-list.html',
})
export class ShoppingListPage {
  private listitems : Ingredient[] = [];

  constructor(public shoppingListService: ShoppingListService){}

  ionViewWillEnter(){
    this.loadItem();
  }

  onAddItem(form: NgForm){
    this.shoppingListService.addItem(form.value.ingredienName, form.value.amount);
    form.reset(); //clear
    this.loadItem();
  }

  onCheckItem(index: number){
    this.shoppingListService.removeItem(index);
    this.loadItem();
  }

  private loadItem(){
    this.listitems = this.shoppingListService.getItem();
  }

}
