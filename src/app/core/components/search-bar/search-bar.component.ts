import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { filter, debounceTime } from 'rxjs/operators';

import { QUERY_MIN_LENGTH, MAIN_ROUTE, SEARCH_DEBOUNCE_TIME_MS, SEARCH_STRING_FORM_CONTROL } from 'src/app/constants/common-constants';
import { CommonService } from '../../services/common.service';
import { YoutubeResponseService } from 'src/app/youtube/services/youtube-response.service';
import { LoginService } from '../../../auth/services/login.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit, OnDestroy {

  public form: FormGroup;
  public searchStringSubscription: Subscription;

  constructor(
    public commonService: CommonService,
    public loginService: LoginService,
    private youtubeResponseService: YoutubeResponseService,
    public router: Router
  ) {}

  public ngOnInit(): void {
    this.form = new FormGroup({
      [SEARCH_STRING_FORM_CONTROL]: new FormControl('')
    });

    this.searchStringSubscription = this.form
      .get(SEARCH_STRING_FORM_CONTROL).valueChanges
      .pipe(
        filter(s => s.length >= QUERY_MIN_LENGTH),
        debounceTime(SEARCH_DEBOUNCE_TIME_MS)
        )
      .subscribe(
        query => {
          this.youtubeResponseService.searchString.next(query);
        }
      );
  }

  public goToMain(): void {
    this.router.navigate([MAIN_ROUTE]);
  }

  public ngOnDestroy(): void {
    this.searchStringSubscription.unsubscribe();
  }
}
