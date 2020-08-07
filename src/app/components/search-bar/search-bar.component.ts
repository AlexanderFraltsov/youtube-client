import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {

  @Output() public toggleSettings: EventEmitter<boolean> = new EventEmitter();

  public opened: boolean = false;

  public onToggleSettings(): void {
    this.opened = !this.opened;
    this.toggleSettings.emit(this.opened);
  }
}
