import { Component, Input, OnInit } from '@angular/core';
import { Helper } from '../../helper';
import { Message } from '../../message';
import { ExcelService } from '../../services/excel.service';

@Component({
  selector: 'app-import-excel',
  templateUrl: './import-excel.component.html',
  styleUrls: ['./import-excel.component.scss']
})
export class ImportExcelComponent implements OnInit {

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
   * url of api to import excel file
   *
   */
  @Input() action: any;

  /**
   * url of template of excel file
   *
   */
  @Input() templateUrl = "";

  /**
   * url of template of excel file
   *
   */
  @Input() data = {};

  /**
   * init jquery
   *
   */
  $: any  = $;

  /**
   * init jquery
   *
   */
  doc: any  = document;

  /**
   * current step of import steps
   *
   */
  step = 1;

  /**
   * resource object will be sent to server
   *
   */
  resource: any = {};

  /**
   * is the file uploading to server
   *
   */
  isSubmitted: boolean = false;

  /**
   * is the file uploading to server
   *
   */
  excelRows: any = [];


  errors: any = "";

  header: any = [];

  constructor(private excelService: ExcelService) { }

  /**
   * reset all data
   */
  reset() {
    this.resource = {};
    this.step = 1;
  }

  /**
   * go to current step
   */
  goto(step) {
    this.step = step;
  }

  /**
   * click on input file
   *
   */
  changeFileInput() {
    this.$('#importExcelFileInput').click();
  }

  /**
   * click on input file
   *
   */
  changeFile(event) {
    if (!event.target.files[0])
      return;
    this.resource.file = event.target.files[0];
    //
    this.readExcelFile(event.target.files[0]);
    console.log(event);
    Helper.setFile(event, 'file', this.resource);
  }

  /**
   * read excel file
   */
  readExcelFile(file) {
    var self = this;
    this.doc.readXlsxFile(file).then((rows) => { 
      //self.excelRows = rows;

      if (rows[0])
        this.header = rows[0];
       // this.excelRows.push(rows[0]);
    })
  }

  toExcelData(data: any) {
    if (!data)
      return;
    let excelData = [];
    data.forEach(element => {
      let row = [];
      Object.keys(element.values).forEach(key => {
        row.push(element.values[key]);
      });

      // store errors
      if(element['errors'])
        row.push(element['errors'][0]);

      excelData.push(row);
    });

    console.log(excelData);
    return excelData;
  }

  exportExcel2() {
    this.$("#errorTable").table2excel({
      exclude: ".noExl",
      name: "errors",
      filename: "errors",
      fileext: ".xls",
      exclude_img: true,
      exclude_links: true,
      exclude_inputs: true
    });
  }

  /**
   * click on input file
   *
   */
  uploadFile() {
    if (!this.resource.file)
      return Message.error(Helper.trans("upload excel file"));

    let data = Helper.toFormData(this.data);
    this.isSubmitted = true;
    data.append("file", this.resource.file);

    //
    this.errors = "";
    var errors = "";

    this.excelRows = [];

    this.excelService.upload(this.apiUrl, data).subscribe((r: any) => {
      if (r.status == 1) {
        Message.success(r.message);
        this.reset();

      }else {
        // convert data error to excel data
        this.excelRows = this.toExcelData(r.data);

        // display errors
        Message.error(r.message);
        if (r.data) {
          r.data.forEach(element => {
             errors += Helper.trans("row number : ") + element['row'] + " => " + element['errors'][0] + "<br>";
          });
          this.doc.swal.error(errors);
          this.errors = errors;
        }
      }

      if (this.action)
      this.action();

      this.isSubmitted = false;
    });
  }

  ngOnInit() {
  }

}
