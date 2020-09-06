import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { CardColorDirective } from './directives/card-color.directive';

import { FilterCardsPipe } from './pipes/filter-cards.pipe';
import { SortCardsPipe } from './pipes/sort-cards.pipe';

import { YoutubeRoutingModule } from './youtube-routing.module';
import { SearchSettingsComponent } from './components/search-settings/search-settings.component';
import { CardBigComponent } from './components/card-big/card-big.component';
import { CreateCardComponent } from './components/create-card/create-card.component';
import { SearchItemComponent } from './components/search-item/search-item.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { MainComponent } from './pages/main/main.component';
import { DetailsComponent } from './pages/details/details.component';

@NgModule({
  declarations: [
    SearchResultsComponent,
    SearchItemComponent,
    CreateCardComponent,
    CardBigComponent,
    SearchSettingsComponent,
    FilterCardsPipe,
    SortCardsPipe,
    CardColorDirective,
    MainComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    YoutubeRoutingModule
  ]
})
export class YoutubeModule { }
