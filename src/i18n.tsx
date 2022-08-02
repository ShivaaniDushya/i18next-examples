import i18next from "i18next";
import { initReactI18next } from "react-i18next";

//Import all translation files
import translationEnglish from "./Translation/English/translation.json";
import translationSpanish from "./Translation/Spanish/translation.json";
import translationFrench from "./Translation/French/translation.json";

const resources = {
    en: {
        translation: translationEnglish,
    },
    es: {
        translation: translationSpanish,
    },
    fr: {
        translation: translationFrench,
    },
}

i18next
.use(initReactI18next)
.init({
  resources,
  lng:"en", //default language
});

export default i18next;