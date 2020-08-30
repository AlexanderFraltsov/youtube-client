import { FormGroup, FormControl } from '@angular/forms';
import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  @Output() public toggleSettings: EventEmitter<boolean> = new EventEmitter();

  public form: FormGroup;
  public opened: boolean = false;

  constructor( public commonService: CommonService) {}

  public ngOnInit(): void {
    this.form = new FormGroup({
      searchString: new FormControl('')
    });
  }

  public onSubmit(): void {
    const formData: string = this.form.value.searchString;
    this.commonService.onSubmit(formData);
  }
}
