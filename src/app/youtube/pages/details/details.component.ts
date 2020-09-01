import { YoutubeService } from './../../services/youtube.service';
import { ActivatedRoute } from '@angular/router';
import { ISearchItem } from './../../models/search-item.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  public id: string;
  public card: ISearchItem;
  constructor( public route: ActivatedRoute, public youTubeService: YoutubeService ) {}

  public ngOnInit(): void {
    this.route.params.subscribe( params => {
      this.id = params.id;
    });
    this.card = this.youTubeService.getItemById(this.id);
  }

}
