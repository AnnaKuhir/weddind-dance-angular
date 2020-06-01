import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoachesComponent } from './coaches.component';
import { CoachesItemComponent } from './coaches-item/coaches-item.component';



@NgModule({
  declarations: [
   CoachesComponent,
   CoachesItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CoachesComponent
  ]
})
export class CoachesModule { }