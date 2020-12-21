import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { MAIN_ROUTE } from 'src/app/constants/common-constants';
import { STATISTICS } from '../../constants/constants';
import { IStatisticItem } from '../../models/statistic-item-view.model';
import { ICardRender } from '../../../shared/models/card-render.model';

@Component({
  selector: 'app-card-big',
  templateUrl: './card-big.component.html',
  styleUrls: ['./card-big.component.scss']
})
export class CardBigComponent {
  @Input() public card: ICardRender;

  public statistics: IStatisticItem[] = STATISTICS;
  constructor( public router: Router ) {}

  public goBack(): void {
    this.router.navigate([MAIN_ROUTE]);
  }
}
