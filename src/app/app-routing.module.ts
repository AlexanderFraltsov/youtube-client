import { AuthGuard } from './core/guards/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './core/components/error/error.component';
import { AUTH_ROUTE, MAIN_ROUTE, ERROR_ROUTE } from './constants/common-constants';

const routes: Routes = [
  { path: '', redirectTo: AUTH_ROUTE, pathMatch: 'full' },
  {
    path: AUTH_ROUTE,
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: MAIN_ROUTE,
    loadChildren: () => import('./youtube/youtube.module').then(m => m.YoutubeModule),
    canLoad: [AuthGuard]
  },
  { path: ERROR_ROUTE, component: ErrorComponent, canLoad: [AuthGuard] },
  { path: '**', redirectTo: ERROR_ROUTE }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
