import { Component, Input, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit, OnChanges {

  @Input() response: any = { data: [] };
  @Input() pages: any = [];
  @Input() filter: any = {};
  @Input() get: any = () => {};

  pagesShown = 5;


  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.response.pages_arr) {
      let pages = [];

      let counter = 0;
      let isStart = false;
      this.response.pages_arr.forEach((page) => {
        if (this.response.current_page == page) {
          isStart = true;
        }
        if (counter < this.pagesShown && isStart) {
          pages.push(page);
          counter  ++;
        }
      });

      this.pages = pages;
    }
  }

}
