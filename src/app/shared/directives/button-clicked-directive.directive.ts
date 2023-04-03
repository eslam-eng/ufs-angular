import {Directive, Input, ElementRef, OnChanges} from '@angular/core';

@Directive({selector: '[appButtonClickedDirective]'})
export class ButtonClickedDirective implements OnChanges {
  @Input()
  loaderState: boolean;
  private itemClassList = null;

  constructor(private el: ElementRef) {}

  ngOnChanges() {
    if (this.itemClassList === null) {
      this.itemClassList = this.el.nativeElement.querySelector('.fa').classList
    }
    if (this.loaderState === true) {
      this.el.nativeElement.setAttribute('disabled', true);
      this.itemClassList.add('fa-spin');
    } else {
      this.itemClassList.remove('fa-spin');
      this.el.nativeElement.removeAttribute('disabled');
    }
  }
}
