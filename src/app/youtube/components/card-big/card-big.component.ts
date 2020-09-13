import { ICardRender } from '../../../shared/models/card-render.model';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-big',
  templateUrl: './card-big.component.html',
  styleUrls: ['./card-big.component.scss']
})
export class CardBigComponent {
  @Input() public card: ICardRender;
  constructor( public router: Router ) {}

  public goBack(): void {
    this.router.navigate(['']);
  }
}
