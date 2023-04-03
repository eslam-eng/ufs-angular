import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { HashTable } from 'angular-hashtable';
import { Cache } from '../../cache';
import { Crud } from '../../helpers/crud';

@Component({
  selector: 'app-toggle-col',
  templateUrl: './toggle-col.component.html',
  styleUrls: ['./toggle-col.component.scss']
})
export class ToggleColComponent implements OnInit, OnChanges {

  @Input() crud: Crud;

  @Input() selectedCols: HashTable<any, any> = new HashTable();
  key: any = location.pathname.replace('/', '');

  constructor() {
  }

  loadCacheData() {
    this.key = window.location.pathname.replace('/', '');
    this.selectedCols.put('#', '#');
    let cols = Cache.get(this.key);
    //
    if (cols)
        cols.forEach(element => {
          this.selectedCols.put(element, element);
        });
  }

  ngOnInit() {
    this.loadCacheData();
  }

  ngOnChanges() {
    this.loadCacheData();
  }


  setAll() {
    if (this.crud)
    this.crud.fillable.forEach(element => {
      this.toggle(element.name);
      //
    });
  }

  toggle(col) {
    if (!this.selectedCols.has(col))
      this.selectedCols.put(col, col);
    else
      this.selectedCols.remove(col);
    // cache settings
    Cache.set(this.key, this.selectedCols.getAll());
  }
}
