import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../../../shared/services/global.service';
import { Message } from '../../../../shared/message';
import { Helper } from '../../../../shared/helper';
import { Router } from '@angular/router';

@Component({
  selector: 'app-awb-edit-dialog',
  templateUrl: './awb-edit-dialog.component.html',
  styleUrls: ['./awb-edit-dialog.component.scss']
})
export class AwbEditDialogComponent implements OnInit {

  code: any;
  canEdit: boolean = false;
  awb: any = {};
  $: any = $;
  loading: any = false;

  constructor(private service: GlobalService, private router: Router) { }

  ngOnInit() {
  }

  edit() {
    Helper.refreshComponent(this.router, "/awb-edit/"+this.awb.id);
  }

  search() {
    this.loading = true;
    this.service.get('awbs', {code: this.code}).subscribe((res: any) => {

      if (res.data.length > 0) {
        this.awb = res.data[0];
        this.canEdit = true;

        this.$('#editAwbModal').modal('hide');
        Message.success(Helper.trans('awb with code {code} found').replace('{code}', this.code));
        this.edit();
        this.code = null;
      } else {
        Message.error(Helper.trans('enter valid awb code'));
      }

      this.loading = false;
    });
  }
}
