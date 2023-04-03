import { Cache } from '../cache';

export class Theme {

  public static PREFIX = "THEME";

  public static COLORS = [
    {color: '#5c6bc0'},
    {color: '#333'},
    {color: '#009688'},
    {color: '#ff5722'},
    {color: '#29910d'},
    {color: '#795548'},
    {color: '#5f5f5f'},
    {color: '#e91e63'}
  ];

  public static DEFAULT = Theme.COLORS[0];

  public static load() {
    let theme = Theme.get();
    Theme.change(theme);
  }

  public static get() {
    let theme = Cache.get(Theme.PREFIX);
    if (!theme)
      theme = Theme.DEFAULT;

    return theme;
  }

  public static change(object: any) {
    let element = document.getElementById('theme');
    element.innerHTML = '.w3-indigo, .btn-primary, .fixed-nav,.mat-primary { background-color: '+object.color+'!important; }';
    element.innerHTML += '.w3-text-indigo { color: '+object.color+'!important; }';
    Cache.set(Theme.PREFIX, object);
  }
}
