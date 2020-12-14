import { cloneDeep } from "lodash";

const get = (obj: Record<string, any>, path: string) => {
  var arr = path.split(".");
  while (arr.length) {
    const index = arr.shift();
    if (index) obj = obj[index];
  }
  return obj;
};

const iterate = (obj: any, cb: any) => {
  Object.keys(obj).forEach((key) => {
    if (typeof obj[key] === "object") {
      iterate(obj[key], cb);
    } else {
      obj[key] = cb(obj[key]);
    }
  });
};

export const parseTheme = (tokens: any, theme: any) => {
  const out = cloneDeep(theme);
  iterate(out, (path: string) => {
    if (path.includes(".")) return get(tokens, path);
    return path;
  });
  return out;
};
