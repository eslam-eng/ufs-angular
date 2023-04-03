
import { Cache } from 'src/app/shared/cache';

export class Translation {

    public static TRANSLATION_DATA = {};
    public static TRANSLATION_CACHE_NOT_EXISTS_KEY = 'translations_not_exists';
    public static TRANSLATION_CACHE_KEY = 'translations';
    /**
     * return application current language
     */
    public static getLang() {
        return 'en';
    }

    public static getTranslationsData() {
        const data = Cache.get(Translation.TRANSLATION_CACHE_KEY);
        if (data)
            return data;
        else
            return {};
    }

    public static storeNewKey(key: string) {
        let data = Cache.get(Translation.TRANSLATION_CACHE_NOT_EXISTS_KEY);
        //console.log("data of translation: ", (data instanceof Object));

        if (!data) {
          data = [];
        }
        if (data) {
            data.push({
                key: key,
                name_ar: key,
                name_en: key
            });
        } else {
            data = [
                {key: key, name_ar: key, name_en: key}
            ]
        }

        // update translation cache
        Cache.set(Translation.TRANSLATION_CACHE_NOT_EXISTS_KEY, data);
    }

    public static getNewKeys() {
        return Cache.get(Translation.TRANSLATION_CACHE_NOT_EXISTS_KEY);
    }
}
