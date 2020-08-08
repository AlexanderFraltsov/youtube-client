import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { SearchItemComponent } from './components/search-item/search-item.component';
import { CreateCardComponent } from './components/create-card/create-card.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CardBigComponent } from './components/card-big/card-big.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SearchSettingsComponent } from './components/search-settings/search-settings.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardToRenderPipe } from './pipes/card-to-render.pipe';
import { CardColorDirective } from './directives/card-color.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchResultsComponent,
    SearchItemComponent,
    CreateCardComponent,
    LoginComponent,
    RegisterComponent,
    CardBigComponent,
    SearchBarComponent,
    SearchSettingsComponent,
    CardToRenderPipe,
    CardColorDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
