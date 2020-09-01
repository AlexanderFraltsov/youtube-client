import { ICardRender } from './../../models/card-render.model';
import { YoutubeService } from './../../services/youtube.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ISearchItem } from '../../models/search-item.model';

@Component({
  selector: 'app-card-big',
  templateUrl: './card-big.component.html',
  styleUrls: ['./card-big.component.scss']
})
export class CardBigComponent implements OnInit {
  public id: string;
  public card: ICardRender;

  constructor( public route: ActivatedRoute, public router: Router, public youTubeService: YoutubeService ) {}

  public ngOnInit(): void {
    this.route.params.subscribe( params => {
      this.id = params.id;
    });
    const item: ISearchItem = this.youTubeService.getItemById(this.id);
    this.card = this.youTubeService.itemToCard(item);
  }

  public goBack(): void {
    this.router.navigate(['main']);
  }
}
