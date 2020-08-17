import { cloneDeep } from "lodash";

const get = (obj: any, path: string) => {
  const paths = path.split(".");
  let current = obj;
  let i;

  for (i = 0; i < paths.length; ++i) {
    if (current[paths[i]] === undefined) {
      return undefined;
    } else {
      current = current[paths[i]];
    }
  }
  return current;
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
