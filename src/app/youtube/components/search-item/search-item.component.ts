import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { MAIN_ROUTE } from '../../../constants/common-constants';
import { STATISTICS } from '../../constants/constants';
import { IStatisticItem } from '../../models/statistic-item-view.model';
import { ICardRender } from '../../../shared/models/card-render.model';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss']
})
export class SearchItemComponent {
  @Input() public item: ICardRender;

  public statistics: IStatisticItem[] = STATISTICS;
  constructor(public router: Router) { }

  public goToDetailedInfo(id: string): void {
    this.router.navigate([MAIN_ROUTE, id]);
  }
}
