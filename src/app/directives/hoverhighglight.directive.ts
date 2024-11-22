import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHoverhighglight]',
  standalone: true
})
export class HoverhighglightDirective {
  @Input() appHoverHighlight :string='';

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter():void{
    this.highlight(this.appHoverHighlight||'yellow');
  }
  @HostListener('mouseleave') onMouseleave():void{
    this.highlight('');
  }
  private highlight(color:string):void{
    this.el.nativeElement.style.backgroundColor=color;
  }
}
