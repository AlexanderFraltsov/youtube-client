import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-settings',
  templateUrl: './search-settings.component.html',
  styleUrls: ['./search-settings.component.scss']
})
export class SearchSettingsComponent {
  @Output() private filterChange: EventEmitter<string> = new EventEmitter();

  public onChange(e: Event): void {
    const filter: string = (<HTMLInputElement>e.target).value;
    this.filterChange.emit(filter);
  }
}
