import { Component } from '@angular/core';
import { YoutubeService } from '../../services/youtube.service';

type DirectionIcon = 'arrow_drop_up' | 'arrow_drop_down';
type SortType = 'date' | 'views';

@Component({
  selector: 'app-search-settings',
  templateUrl: './search-settings.component.html',
  styleUrls: ['./search-settings.component.scss']
})
export class SearchSettingsComponent {

  public sortDirectionIcon: DirectionIcon;
  public sortType: SortType;
  constructor( public youtubeService: YoutubeService ) { }

  public sort(sortType: SortType): void {
    this.youtubeService.sort(sortType);
    this.sortDirectionIcon = (
      <DirectionIcon>`arrow_drop_${(
        this.youtubeService.sortOptions.sortDirection
      )}`
    );
    this.sortType = this.youtubeService.sortOptions.sort;
  }
}
