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

export const parseTheme = (tokens: any, theme: any) => {
  return {};
};
