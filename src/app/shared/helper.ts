import { Router } from '@angular/router';
import { Translation } from './translation';


export class Helper {

  public static SETTING = {};

  /**
   *  reload angular component
   * @param router
   * @param url
   */
  public static refreshComponent(router: Router, url) {
    router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      router.navigate([url]);
    });
    setTimeout(() => {
      let doc: any = document;
      doc.jquery('.modal-backdrop fade in').remove();
    }, 1000);
  }

  /**
   * translate word
   *
   * @param word
   */
  public static trans(word: string) {
    word = word.replace(/\s/g, '_');
    word = word.toLocaleLowerCase();
    let key = word;
    // load translations from cache
    const transWord = Translation.TRANSLATION_DATA[word];//getTranslationsData()[word];

    if (transWord) {
      let translated = transWord['name_'+Translation.getLang()];
      if (!translated)
        return key;

      return translated;
    }
    Translation.storeNewKey(word);
    return word;
  }

  /**
   * set file object to model from input file
   *
   */
  public static randColor() {
    let colors = [
        "w3-pink",
        "w3-green",
        "w3-blue",
        "w3-purple",
        "w3-deep-purple",
        "w3-indigo",
        "w3-light-blue",
        "w3-teal",
        "w3-orange",
        "w3-blue-gray",
        "w3-brown",
    ];
    var item = colors[Math.floor(Math.random() * colors.length)];
    return item;
  }

  /**
   * printi html table
   *
   */
  public static print() {
    let doc: any = document;
    doc.printJs();
  }


  /**
   * set file object to model from input file
   *
   */
  public static setFile(event, key, model) {
    model[key] = event.target.files[0];
  }

  /**
   * convert file object from input file
   * to image url
   *
   */
  public static loadImage(event, key, model) {
    Helper.setFile(event, key, model);
    var reader = new FileReader();
    reader.readAsDataURL(model[key]);
    reader.onload = (_event) => {
      model[key+"_url"] = reader.result;
    }
  }

  /**
   * validate on object from array of attributes
   *
   * @param model
   * @param requireds
   */
  public static validator(model, attributes: any) {
    let valid = true;
    attributes.forEach(element => {
      if (!model[element])
        valid = false;
    });
    return valid;
  }

  /**
   * open new window in the browser
   *
   * @param url: String url of the page
   */
  public static openWindow(url) {
    const options = "toolbar=yes,scrollbars=yes,resizable=yes,top=100,left=200,width=905,height=484";
    window.open(url, "_blank", options);
  }

  /**
   * convert javascript object to formData object
   * @param resource java script object
   * @returns FormData object
   */
  public static toFormData(resource) {
    let data = new FormData();
    for(let key of Object.keys(resource)) {
      if(resource[key])
        data.append(key, resource[key]);
    }
    return data;
  }

  /**
   * pre pagination
   *
   */
  public static prepagination(resources) {
    if (!resources.data)
      return;
    resources.prev_page = resources.prev_page_url? resources.prev_page_url.replace(resources.path+'?page=', '') : null;
    resources.next_page = resources.next_page_url? resources.next_page_url.replace(resources.path+'?page=', '') : null;
    resources.pages = Math.ceil(resources.total / resources.per_page);
    resources.pages_arr = [];
    for(let i = 0; i < resources.pages; i ++)
      resources.pages_arr.push(i+1);
  }

  /**
   * get over text if size bigger than text length
   */
  public static getOverText(text: string, size) {
    let overtext = "";
    if (text.length <= size) {
      overtext = text;
    } else {
      overtext = text.substring(0, size) + "...";
    }
    return overtext;
  }

  public static loader(action) {
    //let $: any = $;
    if (action)
      $('.app-loader').show(500);
    else
      $('.app-loader').hide(500);
  }
}

