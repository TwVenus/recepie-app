import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditRecepiePage } from './edit-recepie';

@NgModule({
  declarations: [
    EditRecepiePage,
  ],
  imports: [
    IonicPageModule.forChild(EditRecepiePage),
  ],
})
export class EditRecepiePageModule {}
