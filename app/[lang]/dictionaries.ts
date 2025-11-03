import "server-only";

const dictionaries = {
  en: () =>
    import("../../dictionaries/en.json").then((module) => module.default),
  //  TODO when adding more languages nl: () => import("../../dictionaries/nl.json").then((module) => module.default),
  de: () =>
    import("../../dictionaries/de.json").then((module) => module.default),
} as const;

// This will infer the return type from whatever dictionary gets loaded
export const getDictionary = async (locale: string) => {
  // Safety check: if locale is not supported, fall back to default
  const supportedLocale = (
    locale in dictionaries ? locale : "en"
  ) as keyof typeof dictionaries;
  return dictionaries[supportedLocale]();
};

// Export the type based on the return type of getDictionary
export type Dictionary = Awaited<ReturnType<typeof getDictionary>>;
