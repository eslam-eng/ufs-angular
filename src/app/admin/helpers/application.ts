import { Autoloader } from './autoloader';
export class Application {

  public static start() {
    Application.startLoading();
  }

  public static startLoading() {
    if (document.getElementById('apploading'))
      document.getElementById('apploading').style.display = "block";
  }

  public static endLoading() {
    if (document.getElementById('apploading'))
      document.getElementById('apploading').style.display = "none";
  }
}
