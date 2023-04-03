import { Component, OnInit } from '@angular/core';
import { Auth } from '../../../shared/auth';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {

  public user: any = {};

  constructor() {
    this.user = Auth.user();
  }

  ngOnInit() {
  }

}
