import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { HeaderComponent } from './header.component';
import { EditComponent } from '../edit/edit.component';
import { EditModalComponent } from '../edit-modal/edit-modal.component';



@NgModule({
  declarations: [
    NavigationComponent,
    HeaderComponent,
    EditComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }

