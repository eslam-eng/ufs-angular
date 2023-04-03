import { Component, OnInit } from '@angular/core';
import { Helper } from '../../../../shared/helper';

@Component({
  selector: 'app-report-options',
  templateUrl: './report-options.component.html',
  styleUrls: ['./report-options.component.scss']
})
export class ReportOptionsComponent implements OnInit {

  doc: any = document;

  constructor() { }

  ngOnInit() {
  }


  print() {
    Helper.print();
  }

  excel() {
    this.doc.exportExcel();
  }

}
