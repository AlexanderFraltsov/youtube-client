import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonService } from '../../services/common.service';
import { YoutubeResponseService } from 'src/app/youtube/services/youtube-response.service';
import { Subscription } from 'rxjs';
import { filter, debounceTime } from 'rxjs/operators';
import { SEARCH_RESULTS, QUERY_MIN_LENGTH } from 'src/app/constants/common-constants';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit, OnDestroy {

  public form: FormGroup;
  public searchString: Subscription;

  constructor(
    public commonService: CommonService,
    public youtubeResponseService: YoutubeResponseService
  ) {}

  public ngOnInit(): void {
    this.form = new FormGroup({
      searchString: new FormControl('')
    });

    this.searchString = this.form.get('searchString').valueChanges
      .pipe(
        filter(s => s.length >= QUERY_MIN_LENGTH),
        debounceTime(1000)
        )
      .subscribe(
        query => {
          this.youtubeResponseService.searchString.next(query);
        }
      );
  }

  public ngOnDestroy(): void {
    this.searchString.unsubscribe();
  }
}
