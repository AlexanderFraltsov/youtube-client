import { YoutubeModule } from './../youtube/youtube.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { HeaderComponent } from './components/header/header.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { ErrorComponent } from './components/error/error.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SearchBarComponent,
    ErrorComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    YoutubeModule
  ],
  exports: [
    HeaderComponent,
    SearchBarComponent,
    ErrorComponent
  ]
})
export class CoreModule { }
