import { YoutubeModule } from './../youtube/youtube.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { HeaderComponent } from './components/header/header.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SearchBarComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    YoutubeModule
  ],
  exports: [
    HeaderComponent,
    SearchBarComponent
  ]
})
export class CoreModule { }
