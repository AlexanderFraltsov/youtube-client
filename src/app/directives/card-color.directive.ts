import { Directive, ElementRef, Renderer2, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appCardColor]'
})
export class CardColorDirective implements OnInit {
  @Input() public appCardColor: string;
  constructor(private el: ElementRef, private r: Renderer2) {}

  public ngOnInit(): void {
    this.r.setStyle(this.el.nativeElement, 'border-color', this.appCardColor);
  }
}
