import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { BannerModule } from './banner/banner.module';
import { HttpClientModule } from '@angular/common/http';
import { ServicesModule } from './services/services.module';
import { FooterComponent } from './footer/footer.component';
import { OffersModule } from './offers/offers.module';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { CoachesModule } from './coaches/coaches.module';
import { ModalModule } from './modal/modal.module';
import { ModalComponent } from './modal/modal.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { EditModalComponent } from './edit-modal/edit-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    EditModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    BannerModule,
    HttpClientModule,
    ServicesModule,
    OffersModule,
    AngularSvgIconModule.forRoot(),
    CoachesModule,
    ModalModule,
    NoopAnimationsModule,
    MatDialogModule,
    ReactiveFormsModule,
    FormsModule
  ],
  entryComponents: [
    ModalComponent
  ],
  providers: [],
  bootstrap: [AppComponent]  //запуск компонента 
})
export class AppModule { }
