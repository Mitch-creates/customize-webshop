import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["en", "de"],

  // Used when no locale matches
  defaultLocale: "en",
  // TODO implement custom paths to improve SEO
  //  pathnames: {
  //   "/account": {
  //     en: "/account",
  //     de: "/account",
  //   },
  // },
});
