import { random } from "lodash";

export const PKG_PREFIX = "vue3-tables-";

export const getRandomString: (
  length?: number,
  withNumbers?: boolean
) => string = (length = 12, withNumbers = true): string => {
  let parts = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (withNumbers) {
    parts += "0123456789";
  }
  return Array(length)
    .fill("")
    .map(() => {
      const idx = random(0, parts.length - 1);
      return parts[idx];
    })
    .join("");
};
