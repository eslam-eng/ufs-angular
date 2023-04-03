import { Component, OnInit } from '@angular/core';
import { Cache } from 'src/app/shared/cache';
import { Theme } from 'src/app/shared/helpers/theme';
import { SystemSettingService } from '../../services/system-setting.service';

@Component({
  selector: 'app-system-label',
  templateUrl: './system-label.component.html',
  styleUrls: ['./system-label.component.scss']
})
export class SystemLabelComponent implements OnInit {

  setting: any = {};
  $: any = $;
  resizable = false;

  isClosed = false;
  isThemeOpen = false;
  selectedTheme: any = {};
  colors: any = [];

  constructor(private systemSettingService: SystemSettingService) {
    Theme.load();
    this.loadTheme();
  }

  loadTheme() {
    this.selectedTheme = Theme.get();
    console.log(this.selectedTheme);
    this.colors = Theme.COLORS;
    console.log(this.colors);
  }

  changeColor(color) {
    this.selectedTheme = color;
    Theme.change(color);
  }

  viewThemeDialog() {
    this.$('#themeModal').modal('show');
  }

  loadSettings() {
    this.systemSettingService.getSystemSetting().subscribe((res: any)=>{
      this.setting = res;
    });
  }

  ngOnInit() {
    this.loadSettings();
  }

  toggle() {
    if (this.isClosed) {
      this.$('.setting-list-item').slideDown(300);
      this.isClosed = false;
    } else {
      this.$('.setting-list-item').slideUp(300);
      this.isClosed = true;
    }
  }

  resize() {
    if (this.resizable) {
      $('.safe-box').css('overflow', 'auto');
      $('.safe-box').css('resize', 'none');
      this.resizable = false;
    } else  {
      $('.safe-box').css('overflow', 'auto');
      $('.safe-box').css('resize', 'both');
      this.resizable = true;
    }
  }
}
