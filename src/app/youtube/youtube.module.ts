import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { CardColorDirective } from './directives/card-color.directive';

import { FilterCardsPipe } from './pipes/filter-cards.pipe';
import { CardToRenderPipe } from './pipes/card-to-render.pipe';
import { SortCardsPipe } from './pipes/sort-cards.pipe';

import { SearchSettingsComponent } from './components/search-settings/search-settings.component';
import { CardBigComponent } from './components/card-big/card-big.component';
import { CreateCardComponent } from './components/create-card/create-card.component';
import { SearchItemComponent } from './components/search-item/search-item.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { MainComponent } from './pages/main/main.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    SearchResultsComponent,
    SearchItemComponent,
    CreateCardComponent,
    CardBigComponent,
    SearchSettingsComponent,
    CardToRenderPipe,
    FilterCardsPipe,
    SortCardsPipe,
    CardColorDirective,
    MainComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: '', component: MainComponent },
      { path: ':id', component: CardBigComponent },
    ])
  ],
  exports: [
    SearchResultsComponent,
    SearchItemComponent,
    CreateCardComponent,
    CardBigComponent,
    SearchSettingsComponent,
    RouterModule
  ]
})
export class YoutubeModule { }
