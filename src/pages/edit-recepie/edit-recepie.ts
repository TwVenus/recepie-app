import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, AlertController } from 'ionic-angular';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'page-edit-recepie',
  templateUrl: 'edit-recepie.html',
})
export class EditRecepiePage implements OnInit {
  mode = 'New';
  selectOptions = ['Easy', 'Medium', 'Hard'];
  recipeForm: FormGroup;
  
  constructor(private NavParams: NavParams, private actionSheetController : ActionSheetController, private alertControllrt : AlertController){}

  ngOnInit(){
    this.mode = this.NavParams.get('mode');
    this.initalizeForm();
  }

  onSubmit(){
    console.log(this.recipeForm);
  }

  //action sheet
  onManageIngredients(){
    const actionSheet = this.actionSheetController.create({
      title: 'What do you want to do?',
      buttons: [
        {
            text: 'Add Ingredient',
            handler: () =>{
              // pop alert message need .preset() function 
              this.createNewIngredientAlert().present();
            }
        },
        {
            text: 'Remove all Ingredients',
            role: 'destructive',
            handler: () => {
              const fArray : FormArray = (<FormArray>this.recipeForm.get('ingredients'));
              const len = fArray.length;

              if(len > 0){
                for(let i = len - 1 ; i >=0 ; i--){
                  fArray.removeAt(i);
                }
              }
            }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });
    actionSheet.present();
  }

  private createNewIngredientAlert(){
    return this.alertControllrt.create({
      title: 'Add Ingredient',
      inputs: [
        {
           name: 'name',
           placeholder: 'Name'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Add',
          handler: data =>{
            if(data.name.trim() == ''|| data.name == null){
              return;
            }
            (<FormArray>this.recipeForm.get('ingredients')) // input alert's inputs name into <FormArray>this.recipeForm.get('ingredients')
            .push(new FormControl(data.name, Validators.required)); //default, vaildators
          }
        }
      ]
    });
  }

  private initalizeForm(){
    this.recipeForm = new FormGroup({
      'title': new FormControl(null, Validators.required),
      'description': new FormControl(null, Validators.required),
      'difficulty': new FormControl('Medium', Validators.required),
      'ingredients': new FormArray([])
    });
  }
}
