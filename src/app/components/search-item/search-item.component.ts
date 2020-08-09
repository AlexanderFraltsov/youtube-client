import { ICardRender } from './../../models/card-render.model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss']
})
export class SearchItemComponent {
  @Input() public item: ICardRender;

  constructor() { }
}
