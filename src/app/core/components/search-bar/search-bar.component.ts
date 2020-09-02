import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  public form: FormGroup;

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
