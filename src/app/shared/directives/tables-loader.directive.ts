import {Directive, ElementRef, OnInit} from '@angular/core';

@Directive({
  selector: '[appTablesLoader]'
})

export class TablesLoaderDirective implements OnInit {

  constructor(private elementRef: ElementRef) {

  }

  ngOnInit(): void {
  }

}
