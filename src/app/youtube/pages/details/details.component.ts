import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { ISearchItem } from './../../models/search-item.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { MAIN_ROUTE } from 'src/app/constants/common-constants';
import { YoutubeResponseService } from '../../services/youtube-response.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit, OnDestroy {
  public id: string;
  public card: ISearchItem;
  public idSubscription: Subscription;

  constructor(
    public route: ActivatedRoute,
    public youTubeResponseService: YoutubeResponseService,
    private router: Router
  ) {}

  public ngOnInit(): void {
    this.idSubscription = this.route.params.subscribe( params => {
      this.id = params.id;
    });

    this.card = this.youTubeResponseService.getItemById(this.id);
    if (!this.card) {
      this.router.navigate([MAIN_ROUTE]);
    }
  }
  public ngOnDestroy(): void {
    this.idSubscription.unsubscribe();
  }

}
