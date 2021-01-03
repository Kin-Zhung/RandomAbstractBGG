import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import{MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {MatRadioModule} from '@angular/material/radio';
@NgModule({
  imports:[MatButtonModule,MatToolbarModule,MatCardModule,MatExpansionModule,MatFormFieldModule,MatInputModule,MatSelectModule,ScrollingModule,MatRadioModule],
  exports:[MatButtonModule,MatToolbarModule,MatCardModule,MatExpansionModule,MatFormFieldModule,MatInputModule,MatSelectModule,ScrollingModule,MatRadioModule],
})
export class MyMaterialModule{}
