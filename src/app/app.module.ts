import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { SearchItemComponent } from './components/search-item/search-item.component';
import { CreateCardComponent } from './components/create-card/create-card.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { Card1Component } from './components/card1/card1.component';
import { Card2Component } from './components/card2/card2.component';
import { CardBigComponent } from './components/card-big/card-big.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SearchSettingsComponent } from './components/search-settings/search-settings.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchResultsComponent,
    SearchItemComponent,
    CreateCardComponent,
    LoginComponent,
    RegisterComponent,
    Card1Component,
    Card2Component,
    CardBigComponent,
    SearchBarComponent,
    SearchSettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
