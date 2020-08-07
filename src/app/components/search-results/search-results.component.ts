import { ISearchItem } from './../../models/search-item.model';
import { YoutubeService } from './../../services/youtube.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

  public cards: ISearchItem[];
  constructor(private youtubeService: YoutubeService) { }

  public ngOnInit(): void {
    this.getSearchItems();
  }

  public getSearchItems(): void {
    this.cards = this.youtubeService.getSearchItems();
  }
}
