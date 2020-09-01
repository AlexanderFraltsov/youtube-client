import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './core/components/error/error.component';

const routes: Routes = [
  { path: '',   redirectTo: 'login', pathMatch: 'full' },
  { path: '404', component: ErrorComponent },
  { path: 'login', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: 'main', loadChildren: () => import('./youtube/youtube.module').then(m => m.YoutubeModule) },
  { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
