import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { BannerComponent } from './banner.component';
import { InfoComponent } from './info/info.component';
import { ImageComponent } from './image/image.component';



@NgModule({
  declarations: [
    ButtonComponent,
    BannerComponent,
    InfoComponent,
    ImageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BannerComponent
  ]
})
export class BannerModule { }

