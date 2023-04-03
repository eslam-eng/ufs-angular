import { Helper } from '../shared/helper';
import { Message } from '../shared/message';
import { SettingService } from './services/setting.service';

export class SettingTemplate {

  item: any = {};
  isSubmitted = false;
  data: any = [];
  requiredFields = [];
  baseUrl = null

  constructor(public settingService: SettingService) {
    this.settingService.baseUrl = this.baseUrl;
  }

  action(res) {

  }

  get() {
    this.settingService.baseUrl = this.baseUrl;
    this.settingService.get().subscribe((res) => {
      this.data = res;
    });
  }

  add() {
    let item = {};
    this.data.push(item);
  }

  validate(item=this.item) {
    let valid = true;
    this.requiredFields.forEach(element => {
      if (!item[element])
        valid = false;
    });
    return valid;
  }

  send(item=this.item, index=null) {
    this.settingService.baseUrl = this.baseUrl;
    if (item.id)
      this.update(item, index=null);
    else
      this.store(item, index=null);
  }

  store(item=this.item, index=null) {
    if (!this.validate(item))
      return Message.error(Helper.trans('fill all data'));

    this.isSubmitted = true;
    this.settingService.store(item).subscribe((res: any)=>{
      if (res.status == 1) {
        Message.success(res.message);
        //
        if (index)
        this.data[index] = res.data;
        let arr = this.data;
        this.data = [];
        this.data = arr;
      }
      else
        Message.error(res.message);

      this.action(res);
      this.isSubmitted = false;
    });
  }

  update(item=this.item, index=null) {
    if (!this.validate(item))
      return Message.error(Helper.trans('fill all data'));

    this.isSubmitted = true;
    this.settingService.update(item).subscribe((res: any)=>{
      if (res.status == 1) {
        Message.success(res.message);
        //
        if (index)
        this.data[index] = res.data;
        let arr = this.data;
        this.data = [];
        this.data = arr;
      }
      else
        Message.error(res.message);

      this.action(res);
      this.isSubmitted = false;
    });
  }

  destroy(item, index) {
    this.settingService.baseUrl = this.baseUrl;
    let self = this;
    Message.confirm(Helper.trans('are you sure'), ()=>{

      if (item.id) {
        this.isSubmitted = true;
        this.settingService.destroy(item.id).subscribe((res: any)=>{
          if (res.status == 1)
            Message.success(res.message);
          else
            Message.error(res.message);

          this.action(res);
          this.isSubmitted = false;
        });
      }
      // remove item from array
      this.data.splice(index, index+1);
      let arr = this.data;
      this.data = [];
      this.data = arr;
    });
  }
}
