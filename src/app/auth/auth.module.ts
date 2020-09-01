import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: '', component: LoginComponent }
    ])
  ],
  exports: [
    LoginComponent
  ]
})
export class AuthModule { }
