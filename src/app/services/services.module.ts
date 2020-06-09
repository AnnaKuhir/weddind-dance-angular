import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from './item/item.component';
import { ServicesComponent } from './services.component';

@NgModule({
  declarations: [
    ItemComponent, 
    ServicesComponent
  ],
  imports: [CommonModule],
  exports: [ServicesComponent],
})
export class ServicesModule {}
