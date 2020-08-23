// Just build for DSS in SystemUI for now
const StyleDictionary = require("style-dictionary");

const createPath = (obj, path, value = null) => {
  path = typeof path === "string" ? path.split(".") : path;
  let current = obj;
  while (path.length > 1) {
    const [head, ...tail] = path;
    path = tail;
    if (current[head] === undefined) {
      current[head] = {};
    }
    current = current[head];
  }
  current[path[0]] = value;
  return obj;
};

StyleDictionary.registerFormat({
  name: "javascript/system-ui",
  formatter: (dictionary) => {
    let object = {};
    dictionary.allProperties.forEach((prop) => {
      object = createPath(object, prop.path, prop.value);
    });
    return `export const tokens = ${JSON.stringify(object, null, 2)};`;
  },
});

StyleDictionary.registerFormat({
  name: "typescript/system-ui-definitions",
  formatter: (dictionary) => {
    let object = {};
    dictionary.allProperties.forEach((prop) => {
      object = createPath(object, prop.path, "string");
    });
    const json = JSON.stringify(object, null, 2);
    const regex = /"string"/gi;
    const tokens = json.replace(regex, "string");
    return `
declare namespace DSSTokens {
  type tokens = ${tokens};
}
export = DSSTokens;
export as namespace DSSTokens;
`;
  },
});

// We will need to change this as more tokens are created
module.exports = {
  source: ["./properties/dss/**/*.json"],
  platforms: {
    web: {
      transformGroup: "js",
      buildPath: "./dist/",
      files: [
        {
          destination: "index.js",
          format: "javascript/system-ui",
        },
        {
          destination: "index.d.ts",
          format: "typescript/system-ui-definitions",
        },
      ],
    },
  },
};
