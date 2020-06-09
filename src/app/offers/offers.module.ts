import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OffersComponent } from './offers.component';
import { OffersItemComponent } from './offers-item/offers-item.component';
import { AngularSvgIconModule } from 'angular-svg-icon';

@NgModule({
  declarations: [
    OffersComponent,
    OffersItemComponent
  ],
  imports: [
    CommonModule,
    AngularSvgIconModule
  ],
  exports:[
    OffersComponent
  ]
})
export class OffersModule { }
