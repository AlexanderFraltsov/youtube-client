import { CardBigComponent } from './youtube/components/card-big/card-big.component';
import { SearchResultsComponent } from './youtube/components/search-results/search-results.component';
import { LoginComponent } from './auth/components/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'main', component: SearchResultsComponent },
  { path: '404', component: SearchResultsComponent },
  { path: 'detailed/:id', component: CardBigComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
