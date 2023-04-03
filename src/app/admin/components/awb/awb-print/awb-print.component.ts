import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { GlobalService } from '../../../../shared/services/global.service';
import { HashTable } from 'angular-hashtable';

@Component({
  selector: 'app-awb-print',
  templateUrl: './awb-print.component.html',
  styleUrls: ['./awb-print.component.scss']
})
export class AwbPrintComponent implements OnInit, OnChanges {

  $: any = $;
  @Input() selectedResources: HashTable<any, any>;

  printDialogOptions: any;
  data: any;

  constructor(private service: GlobalService) {
    // init window options of print
    this.printDialogOptions = 'height=400,width=400';
    this.selectedResources = new HashTable<any, any>();
  }

  ngOnInit() {
  }

  /**
   * listen to selected awbs
   *
   */
  ngOnChanges() {
    console.log("selected resources: ", this.selectedResources);

    try {
      this.data = {
        awbs: this.selectedResources.getKeys()
      };
    } catch (error) {
      console.log(error);
    }


    console.log("data: ", this.data);
  }

  /**
   * print more Than Awb In A4 Papers
   *
   */
  printA4() {
    this.data = {
      awbs: this.selectedResources.getKeys()
    };
    this.service.loadHtmlPost("awbs/print-selected", this.data).subscribe((res: any) => {
      var newWin = open('url', 'awbs', this.printDialogOptions);
      newWin.document.write(res);
    });
  }

  /**
   * Print Three Awb In A4
   *
   */
  print1x3() {
    this.data = {
      awbs: this.selectedResources.getKeys()
    };
    this.service.loadHtmlPost("awbs/printthree", this.data).subscribe((res: any) => {
      var newWin = open('url', 'awbs', this.printDialogOptions);
      newWin.document.write(res);
    });
  }

  /**
   * print 21 Awb In A4
   *
   */
  print3x7() {
    this.data = {
      awbs: this.selectedResources.getKeys()
    };
    this.service.loadHtmlPost("awbs/3x7awb", this.data).subscribe((res: any) => {
      var newWin = open('url', 'awbs', this.printDialogOptions);
      newWin.document.write(res);
    });
  }

  /**
   * print 24 Awb In A4
   *
   */
  print3x8() {
    this.data = {
      awbs: this.selectedResources.getKeys()
    };
    this.service.loadHtmlPost("awbs/3x8awb", this.data).subscribe((res: any) => {
      var newWin = open('url', 'awbs', this.printDialogOptions);
      newWin.document.write(res);
    });
  }

  /**
   * print 27 Awb In A4
   *
   */
  print3x9() {
    this.data = {
      awbs: this.selectedResources.getKeys()
    };
    this.service.loadHtmlPost("awbs/3x9awb", this.data).subscribe((res: any) => {
      var newWin = open('url', 'awbs', this.printDialogOptions);
      newWin.document.write(res);
    });
  }

  /**
   * print 30 Awb In A4
   *
   */
  print3x10() {
    this.data = {
      awbs: this.selectedResources.getKeys()
    };
    this.service.loadHtmlPost("awbs/3x10awb", this.data).subscribe((res: any) => {
      var newWin = open('url', 'awbs', this.printDialogOptions);
      newWin.document.write(res);
    });
  }

}
