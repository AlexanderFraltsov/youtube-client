import { Directive, ElementRef, Renderer2, Input, OnInit, HostBinding } from '@angular/core';

@Directive({
  selector: '[appCardColor]'
})
export class CardColorDirective implements OnInit {
  @Input() public appCardColor: string;
  @HostBinding('style.border-bottom') public borderBottom: string = null;

  constructor(private el: ElementRef, private r: Renderer2) {}

  public ngOnInit(): void {
    if (this.appCardColor !== null) {
      this.borderBottom = `0.5rem solid ${this.appCardColor}`;
    }
  }
}
