import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DetailsComponent } from './pages/details/details.component';
import { MainComponent } from './pages/main/main.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: ':id', component: DetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class YoutubeRoutingModule {}
