const StyleDictionary = require("style-dictionary");
const JsonToTS = require("json-to-ts");

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
    let response = "";
    let object = {};
    dictionary.allProperties.forEach((prop) => {
      object = createPath(object, prop.path, "string");
    });
    JsonToTS(object).forEach((tokensInterface) => {
      response += `${tokensInterface}\n`;
    });

    return `${response} \n export declare const tokens: RootObject;`;
  },
});

StyleDictionary.registerTransformGroup({
  name: "dss-transform",
  transforms: ["attribute/cti", "name/cti/pascal"],
});

// We will need to change this as more tokens are created
module.exports = {
  source: ["./properties/**/*.json"],
  platforms: {
    web: {
      transformGroup: "dss-transform",
      buildPath: "./build/",
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
