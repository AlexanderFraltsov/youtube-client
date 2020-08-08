import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() public toggleSettings: EventEmitter<boolean> = new EventEmitter();

  public onToggleSettings(opened: boolean): void {
    this.toggleSettings.emit(opened);
  }
}
