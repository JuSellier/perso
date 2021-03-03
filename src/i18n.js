import { addMessages, init, getLocaleFromNavigator } from "svelte-i18n";

// SYNCHRONOUS
import en from "./i18n/en.json";
import fr from "./i18n/fr.json";
addMessages("en", en);
addMessages("fr", fr);

let browserLocale = getLocaleFromNavigator();
console.log(browserLocale);

init({
  initialLocale: browserLocale,
  fallbackLocale: "en",
});
