import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHighlightOnFocus]',
  standalone: true
})
export class HighlightOnFocusDirective {

  @Input() appHoverHighlight :string='';

  constructor(private el: ElementRef) { }

  @HostListener('focus') onFocus():void{
    this.highlight(this.appHoverHighlight);
  }
  @HostListener('Blur') onBlur():void{
    this.highlight('');
  }
  private highlight(color:string):void{
    this.el.nativeElement.style.backgroundColor=color;
  }
}
