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


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent
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
  ],
  providers: [],
  bootstrap: [AppComponent]  //запуск компонента 
})
export class AppModule { }
