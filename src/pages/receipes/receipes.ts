import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EditRecepiePage } from '../edit-recepie/edit-recepie';

@Component({
  selector: 'page-receipes',
  templateUrl: 'receipes.html',
})
export class ReceipesPage {

  constructor(private navCtrl: NavController){}

  onNewRecipe(){
    this.navCtrl.push(EditRecepiePage, {mode: 'New'});
  }

}
