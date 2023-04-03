import { Component, OnInit } from '@angular/core';
import { Auth } from '../shared/auth';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  public auth: any = Auth;
  constructor() { }

  ngOnInit() {
  }

}
