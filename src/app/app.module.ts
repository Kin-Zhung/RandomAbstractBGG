import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CanvasComponent } from './canvas/canvas.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyMaterialModule } from './material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { GeneralComponent } from './canvas/controls/general/general.component';
import { RectangleComponent } from './canvas/controls/rectangle/rectangle.component';
import { SquareComponent } from './canvas/controls/square/square.component';
import { TriangleComponent } from './canvas/controls/triangle/triangle.component';
import { ColorPickerModule } from './color-picker/color-picker.module';
import { CanvasService } from './canvas/canvas.service';
import { RandGenService } from 'src/models/generator.service';
import { SquareService } from './canvas/controls/square/square.service';
import { CircleComponent } from './canvas/controls/circle/circle.component';
import { LinesComponent } from './canvas/controls/lines/lines.component';





@NgModule({
  declarations: [
    AppComponent,
    CanvasComponent,
    GeneralComponent,
    RectangleComponent,
    SquareComponent,
    TriangleComponent,
    CircleComponent,
    LinesComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MyMaterialModule,
    FormsModule,
    ColorPickerModule,
    ReactiveFormsModule

  ],
  providers: [CanvasService,RandGenService,{ provide: Window, useValue: window }],
  bootstrap: [AppComponent]
})
export class AppModule { }
