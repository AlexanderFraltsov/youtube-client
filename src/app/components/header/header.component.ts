import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public opened: boolean;

  public onToggleSettings(opened: boolean): void {
    this.opened = opened;
  }
}
