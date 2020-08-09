import { Directive, ElementRef, Renderer2, Input, OnInit, HostBinding } from '@angular/core';

@Directive({
  selector: '[appCardColor]'
})
export class CardColorDirective implements OnInit {
  @Input() public appCardColor: string;
  @HostBinding('style.border-color') public borderColor: string = 'yellow';

  constructor(private el: ElementRef, private r: Renderer2) {}

  public ngOnInit(): void {
    this.borderColor = this.appCardColor;
  }
}
