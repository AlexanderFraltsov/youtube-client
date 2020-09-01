import { ICardRender } from './../../models/card-render.model';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss']
})
export class SearchItemComponent {
  @Input() public item: ICardRender;

  constructor(public router: Router) { }

  public goToDetailedInfo(id: string): void {
    this.router.navigate(['main', id]);
  }
}
