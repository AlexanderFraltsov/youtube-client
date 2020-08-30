import { MainComponent } from './youtube/pages/main/main.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardBigComponent } from './youtube/components/card-big/card-big.component';
import { LoginComponent } from './auth/components/login/login.component';
import { ErrorComponent } from './core/components/error/error.component';

const routes: Routes = [

  { path: 'login', component: LoginComponent },
  { path: 'main', component: MainComponent },
  { path: 'detailed/:id', component: CardBigComponent },
  { path: '404', component: ErrorComponent },
  { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
