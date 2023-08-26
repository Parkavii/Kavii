import { Directive, Input, ElementRef, Renderer2, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appFontSize]'
})

export class FontSizeDirective implements OnChanges {
  @Input() fontSize: number = 16; // Default font size is 16px

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['fontSize']) {
      this.renderer.setStyle(this.el.nativeElement, 'font-size', `${this.fontSize}px`);
      console.log("changes");
    }
  }
}
