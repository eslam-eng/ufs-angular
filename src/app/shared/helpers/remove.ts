import { Helper } from "../helper";
import { Message } from "../message";
import { GlobalService } from "../services/global.service";
import { Crud } from "./crud";

export class Remove {

  $: any = $;

  private parent: Crud;
  private popup: any = document.getElementById('removeSelectedModal');

  constructor(public service: GlobalService, parent) {
    this.parent = parent;
  }

  private reset() {
    // done
    Message.success(Helper.trans('done'));

    // empty div content
    document.getElementById('totalSelectedItem').innerHTML = "";
    document.getElementById('resultRemoveSelected').innerHTML = "";
    document.getElementById('removedSelectedItem').innerHTML = "";

    // hidden remove selected popup
    this.$(this.popup).modal('hide');
  }

  private desplayRemoveResult(data: any, res: any) {
    if (res.status == 0) {
      document.getElementById('resultRemoveSelected').innerHTML += "<b class='w3-text-red' >"+ Helper.trans('item with id') + " : " + data.id + ", " +res.message+"</b><br>";
    } else {
      document.getElementById('resultRemoveSelected').innerHTML += "<b class='w3-text-green' >"+ Helper.trans('item with id') + " : " + data.id + ", " +res.message+"</b><br>";
    }

    // display total item
    document.getElementById('removedSelectedItem').innerHTML = this.parent.selectedResources.size() + "";
  }

  private performDestroy(data, index, action=null, displayMessage=true) {
    let self = this.parent;
    self.isSubmit = true;
    self.service.store(self.baseApiUrl + self.destroyApiUrl+"/"+data.id, data).subscribe((res: any) => {
      if (res.status == 1) {
        if (displayMessage)
          Message.success(res.message);
        self.get();
      } else {
        Message.error(res.message);
      }
      self.destroyAction(res);
      self.action(res);
      self.isSubmit = true;
      if (action)
        action(res);
    });
  }

  private performDestroySelcted() {
    let item = this.parent.selectedResources.getAll().pop();

    if (item) {
      if (!item.id) {
        return this.reset();
      }
      // remove from selected
      this.parent.selectedResources.remove(item.id);

      this.performDestroy(item, 0, (res) => {
        // display result
        this.desplayRemoveResult(item, res);

        this.performDestroySelcted();
      }, false);
    } else {
      return this.reset();
    }
  }


  /**
   * remove data
   * @param data
   * @param index of item in array
   */
  destroy(data, index, action=null) {
    if (!this.parent.canRemove)
      return;
    let self = this;
    Message.confirm(Helper.trans('are you sure'), () => {
      self.performDestroy(data, index, action);
    });
  }


  /**
   * remove selected items
   */
  destroySelected() {
    if (!this.parent.canRemove)
      return;
    let self = this;

    Message.confirm(Helper.trans('are you sure'), () => {
      // display remove selected popup
      self.$(self.popup).modal('show');

      // display total item
      document.getElementById('totalSelectedItem').innerHTML = self.parent.selectedResources.size() + "";

      self.performDestroySelcted();

    });
  }

}
