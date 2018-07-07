import { Directive, Renderer2, ElementRef, HostBinding, HostListener } from '@angular/core';
import { callLifecycleHooksChildrenFirst } from '@angular/core/src/view/provider';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  
  // Commented is how I implemented it.
  // @HostBinding('class.open') isOpen = false;

  // @HostListener('click') isToggle() {
  //   this.isOpen = !this.isOpen;
  // }

  drop = false;
  
  constructor(private renderer: Renderer2, private elementRef: ElementRef) { }

  @HostListener('click')click(eventData: Event) {
    this.drop = !this.drop;

    if (this.drop) {

      this.renderer.addClass(this.elementRef.nativeElement, 'open');
    } else {
      this.renderer.removeClass(this.elementRef.nativeElement, 'open');

    } 
  }
}
