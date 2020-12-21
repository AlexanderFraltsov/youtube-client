import { NgModule, Provider } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { CardToRenderPipe } from './pipes/card-to-render.pipe';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { YoutubeInterceptor } from './interceptors/youtube.interceptor';

const INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS, useClass: YoutubeInterceptor, multi: true
};

const materialComponents: Array<MatButtonModule> = [
  MatGridListModule,
  MatToolbarModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatInputModule,
  MatIconModule,
  MatDividerModule,
  MatCardModule
];

@NgModule({
  declarations: [
    CardToRenderPipe
  ],
  imports: [
    CommonModule,
    materialComponents,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    materialComponents,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CardToRenderPipe
  ],
  providers: [
    INTERCEPTOR_PROVIDER
  ]
})
export class SharedModule { }
