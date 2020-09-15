import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MAIN_ROUTE } from 'src/app/constants/common-constants';
import { ICardRender } from '../../../shared/models/card-render.model';

@Component({
  selector: 'app-card-big',
  templateUrl: './card-big.component.html',
  styleUrls: ['./card-big.component.scss']
})
export class CardBigComponent {
  @Input() public card: ICardRender;
  constructor( public router: Router ) {}

  public goBack(): void {
    this.router.navigate([MAIN_ROUTE]);
  }
}
