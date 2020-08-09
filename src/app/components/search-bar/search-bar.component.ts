import { FormGroup, FormControl } from '@angular/forms';
import { Component, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  @Output() public toggleSettings: EventEmitter<boolean> = new EventEmitter();
  @Output() public submit: EventEmitter<boolean> = new EventEmitter();

  public form: FormGroup;
  public opened: boolean = false;

  public ngOnInit(): void {
    this.form = new FormGroup({
      searchString: new FormControl('')
    });
  }

  public onToggleSettings(): void {
    this.opened = !this.opened;
    this.toggleSettings.emit(this.opened);
  }

  public onSubmit(): void {
    const formData: string = {...this.form.value};
    this.submit.emit(true);
    console.log('submit', formData);
  }
}
