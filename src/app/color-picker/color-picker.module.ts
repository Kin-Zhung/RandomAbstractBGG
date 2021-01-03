import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorPickerComponent } from './color-picker.component';
import { ColorSliderComponent } from './color-slider/color-slider.component';
import { ColorPaletteComponent } from './color-palette/color-palette.component';



@NgModule({
  declarations: [ColorPickerComponent, ColorSliderComponent, ColorPaletteComponent],
  imports: [
    BrowserModule,
    CommonModule
  ],
  exports: [ColorPickerComponent]
})
export class ColorPickerModule { }
