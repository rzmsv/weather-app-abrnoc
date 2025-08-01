import path from "path";

export const findMessage = async (
  code: string | string[],
  lang: string = process.env.LANGUAGE || "en"
): Promise<string | string[]> => {
  const defaultError = "Error";

  const defaultLang = `${process.env.LANGUAGE || "en"}.json`;
  const requestedLang = `${lang}.json`;

  let errorFile: Record<string, string> | null = null;

  try {
    try {
      errorFile = require(path.join(__dirname, requestedLang));
    } catch {
      try {
        errorFile = require(path.join(__dirname, defaultLang));
      } catch {
        return defaultError;
      }
    }

    if (!errorFile) return defaultError;

    if (Array.isArray(code)) {
      const errors: string[] = [];
      code.forEach((c) => {
        if (errorFile && errorFile[c]) errors.push(errorFile[c]);
      });
      return errors.length > 0 ? errors : defaultError;
    }

    if (!errorFile[code]) {
      return defaultError;
    }

    return errorFile[code];
  } catch {
    return defaultError;
  }
};