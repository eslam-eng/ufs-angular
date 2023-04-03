import { Component, Input, OnInit } from '@angular/core';
import { HashTable } from 'angular-hashtable';
import { environment } from 'src/environments/environment';
import { Auth } from '../../auth';
import { Helper } from '../../helper';
import { Message } from '../../message';
import { ExcelService } from '../../services/excel.service';

@Component({
  selector: 'app-export-excel',
  templateUrl: './export-excel.component.html',
  styleUrls: ['./export-excel.component.scss']
})
export class ExportExcelComponent implements OnInit {

  /**
   * title of modal
   *
   */
  @Input() title = "";

  /**
   * url of api to import excel file
   *
   */
  @Input() apiUrl = "";

  /**
   * resource object will be sent to server
   *
   */
  @Input() data: any = {};

  /**
   * resource object will be sent to server
   *
   */
  @Input() fields: any = [];

  /**
   * init jquery
   *
   */
  $: any  = $;

  /**
   * current step of import steps
   *
   */
  step = 1;

  /**
   * current step of import steps
   *
   */
  selectFields = new HashTable<any, any>();

  /**
   * is the file uploading to server
   *
   */
  isSubmitted: boolean = false;

  /**
   * is the file uploading to server
   *
   */
  selectAll: boolean = false;

  constructor(private excelService: ExcelService) { }

  /**
   * reset all data
   */
  reset() {
    this.data = {};
    this.step = 1;
  }

  /**
   * go to current step
   */
  goto(step) {
    if (step == 2) {
      if (this.selectFields.getKeys().length <= 0)
        return Message.error('select fields');
    }
    this.step = step;
  }

  /**
   * toggle field from selectedFields
   *
   */
  toggleField(item) {
    if (this.selectFields.has(item))
      this.selectFields.remove(item);
    else
      this.selectFields.put(item, item);

    this.data.fields = this.selectFields.getKeys();
  }

  /**
   * select all fields
   *
   */
  selectAllField() {
    if (!this.selectAll) {
      this.fields.forEach(element => {
        this.selectFields.put(element, element);
      });
      this.selectAll = true;
    }
    else {
    this.fields.forEach(element => {
      if (this.selectFields.has(element))
        this.selectFields.remove(element);
    });
    this.selectAll = false;
    }

    this.data.fields = this.selectFields.getKeys();
  }

  /**
   * click on input file
   *
   */
  downloadFile() {
    if (this.selectFields.getKeys().length <= 0)
      return Message.error(Helper.trans('select fields'));

    let data: any = {
      fields: this.selectFields.getKeys()
    };

    let url = environment.apiUrl + "/" + this.apiUrl + "?" + "api_token=" + Auth.getApiToken() + "&" + this.$.param(data);
    window.open(url);

  }

  ngOnInit() {
  }
}
