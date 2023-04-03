import {Component, Input, OnInit} from '@angular/core';
@Component({selector: 'app-load-more', templateUrl: './load-more.component.html'})
export class LoadMoreComponent implements OnInit {
  @Input() isClicked: boolean;
  @Input() isEnabled: boolean;
  constructor() { }
  ngOnInit() {}
}
