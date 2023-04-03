import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { HashTable } from 'angular-hashtable';
import { Cache } from '../../cache';
import { Crud } from '../../helpers/crud';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, OnChanges {

  @Input() crud: Crud;
  @Input() data: any = [];
  @Input() fillable: any = [];
  @Input() canPrintSelected: any = false;
  @Input() printSelected: any;

  $: any = $;

  selectedCols: HashTable<any, any> = new HashTable();
  key: any = location.pathname.replace('/', '');

  constructor() {
    this.selectedCols.put('#', '#');
    let cols = Cache.get(this.key);

    //
    if (cols)
        cols.forEach(element => {
          this.selectedCols.put(element, element);
        });
  }

  ngOnChanges() {
    if (this.selectedCols.size() < 2)
      this.setAll();
  }


  setAll() {
    if (this.crud)
    this.crud.fillable.forEach(element => {
      this.toggle(element.name);
    });
  }

  toggle(col) {
    if (!this.selectedCols.has(col))
      this.selectedCols.put(col, col);
    else
      this.selectedCols.remove(col);
    // cache settings
    console.log(this.selectedCols.getAll());
    Cache.set(this.key, this.selectedCols.getAll());
  }


  ngOnInit() {
  }

}
