import i18n, { InitOptions } from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '../lang/en.json';
import de from '../lang/de.json';

export function init() {
    const initOptions: InitOptions = {
        resources: {
            en: {
                translation: en,
            },
            de: {
                translation: de,
            },
        },
        lng: 'de',
        fallbackLng: 'en',
        saveMissing: true,
    };
    i18n.use(initReactI18next)
        .init(initOptions)
        .catch((err: unknown) => {
            console.warn(err);
        });
}
