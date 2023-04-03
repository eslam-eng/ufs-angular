import { Component, OnInit } from '@angular/core';
import { Cache } from '../../cache';

@Component({
  selector: 'app-font-resizer',
  templateUrl: './font-resizer.component.html',
  styleUrls: ['./font-resizer.component.scss']
})
export class FontResizerComponent implements OnInit {

  $: any = $;
  styleSheet: any = document.getElementById('fontStyleSheet');
  formFont: any;

  constructor() {
    if (!this.styleSheet)
      this.initFontStyleSheet();

    this.formFont = Cache.get('form_font');
    this.fontResizeAction();
  }

  ngOnInit() {
  }

  initFontStyleSheet() {
    this.styleSheet = document.createElement('style');
    document.head.append(this.styleSheet);
  }

  setFontSize() {
    let selectors = ".form-control, .w3-input, input, select, label, tr, th, table, li, li a, label ";
    this.styleSheet.innerHTML += selectors+" { font-size: "+this.formFont+"px!important }";
  }

  fontResizeAction() {
    // cache form font size
    Cache.set('form_font', this.formFont);

    // assign style to document
    this.setFontSize();
  }

  tickInterval(value: number | null) {
    return value;
  }

}
