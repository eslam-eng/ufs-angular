import { Component, OnInit } from '@angular/core';
import { Cache } from '../../shared/cache';
import { Translation } from '../../shared/translation';
import { TranslationService } from '../../shared/services/translation.service';
import { Message } from '../../shared/message';

@Component({
  selector: 'app-translation',
  templateUrl: './translation.component.html',
  styleUrls: ['./translation.component.scss']
})
export class TranslationComponent implements OnInit {

  $: any = $;
  datatable: any = null;
  public translationList: any;
  public isUpdate = false;
  response: any = {};
  currentPage: any = 1;
  breadcrumbList: any = [];

  filter: any = {};

  constructor(private translationService: TranslationService) { }

  initBreadCrumb() {
    this.breadcrumbList = [
      {name: 'dashboard', url: '/'},
      {name: "translations", url: '#', active: true},
    ];
  }

  ngOnInit() {
    this.initBreadCrumb();
    this.submitNotExistTranslation();
    this.loadTranslations();
  }

  /**
   * search in fields
   * @param item
   */
  search(item) {
    if (!this.filter.search)
      return true;

    var values = [];
    Object.keys(item).forEach(key => {
      values.push(item[key]);
    });

    if (values.toString().toLowerCase().includes(this.filter.search.toString().toLowerCase())) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * load translations and update the cache
   */
  loadTranslations() {
    let data = {
      page: this.currentPage
    };
    this.translationService.getList(data).subscribe((r) => {
      this.response = r;
      this.prePagniation();
    });
  }

  /**
   * load translations and update the cache
   */
  loadِAppTranslations(keys=null) {
    //Translation.TRANSLATION_DATA = null;
    this.translationService.get().subscribe((r) => {
      Translation.TRANSLATION_DATA = r;
      Cache.remove(Translation.TRANSLATION_CACHE_KEY);
      Cache.set(Translation.TRANSLATION_CACHE_KEY, r);
    });
  }

  /**
   * update keys not exists
   */
  submitNotExistTranslation() {
    if (!Translation.getNewKeys())
      return;
    const data = {
      data: Translation.getNewKeys(),
      not_exist: 1
    };
    this.translationService.update(data).subscribe((r) => {
      this.loadTranslations();
      //
      Cache.remove(Translation.TRANSLATION_CACHE_NOT_EXISTS_KEY);
    });
  }

  /**
   * update new words
   */
  updateTranslation() {
    let changedWord = [];
    this.response.data.forEach(element => {
      if (element.changed == 1) {
        element.value = null;
        changedWord.push(element);
      }
    });
    const data = {
      data: changedWord
    };
    this.isUpdate = true;
    this.translationService.update(data).subscribe((r) => {
      const data: any = r;
      if (data.status == 1)
        Message.success(data.message);
      else
        Message.error(data.message);

      this.isUpdate = false;
      //this.loadTranslations();
      this.loadِAppTranslations(changedWord);
    });
  }


  loadPage(page) {
    this.currentPage = page;
    this.loadTranslations();
  }

  prePagniation() {
    if (!this.response.data)
      return;
    this.response.prev_page = this.response.prev_page_url? this.response.prev_page_url.replace(this.response.path+'?page=', '') : null;
    this.response.next_page = this.response.next_page_url? this.response.next_page_url.replace(this.response.path+'?page=', '') : null;
    this.response.pages = Math.ceil(this.response.total / this.response.per_page);
    this.response.pages_arr = [];
    for(let i = 0; i < this.response.pages; i ++)
      this.response.pages_arr.push(i+1);
  }

}
