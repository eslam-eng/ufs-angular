import { Component, OnInit } from '@angular/core';
import { Autoloader } from '../../../helpers/autoloader';
import { GlobalService } from '../../../../shared/services/global.service';

@Component({
  selector: 'app-report-header',
  templateUrl: './report-header.component.html',
  styleUrls: ['./report-header.component.scss']
})
export class ReportHeaderComponent implements OnInit {

  company: any = {};
  companies: any = [];

  constructor(private service: GlobalService) { }

  ngOnInit() {
    if (Autoloader.companies())
      this.companyCallback(Autoloader.companies());
    else
      this.loadCompanies();
  }

  companyCallback(res) {
    res.forEach(element => {
      if (element.id == 1) {
        this.company = element;
      }
    });
  }

  loadCompanies() {
    this.service.get('companies', {paging: '0'}).subscribe((res:any) => {
      this.companyCallback(res);
    });
  }
}
