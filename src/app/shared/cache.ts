import { Encryption } from "./encryption";

export class Cache {

  private static CACHE_KEY = 'ufs_';

  /**
   * store data in locale storage
   *
   * @param key name
   * @param data
   */
  public static set(key, data, crypt=false) {
    data = JSON.stringify(data);

    // check if crypt
    if (crypt) {
      // encrypt the data
      data = Encryption.encrypt(data);
    }

    localStorage.setItem(Cache.CACHE_KEY + key, data);
  }

  /**
   * remove key with its data from cache
   *
   * @param key
   */
  public static remove(key) {
    localStorage.removeItem(Cache.CACHE_KEY + key);
  }

  /**
   * get data from cache
   *
   * @param key
   */
  public static get(key, crypt=false) {
    let data = localStorage.getItem(Cache.CACHE_KEY + key);


    // check if crypt
    if (crypt) {
      // decrypt the data
      data = Encryption.decrypt(data);
    }

    return JSON.parse(data);
  }

  /**
   * check if the cache has value
   *
   * @param key
   */
  public static has(key) {
    const data = localStorage.getItem(Cache.CACHE_KEY + key);
    return (data != null) ? true : false;
  }



}
