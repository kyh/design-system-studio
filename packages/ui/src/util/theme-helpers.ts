const BASE_KEY = "base";

export const getVariantScales = (theme: any, component: string) => {
  const componentConfig = theme[component];
  if (!componentConfig) return [];
  return Object.keys(componentConfig)
    .filter((configKey) => configKey !== BASE_KEY)
    .map((configKey) => {
      const variants = Object.keys(componentConfig[configKey]);
      return {
        name: configKey,
        variants,
        states: getStateTypes(componentConfig[configKey][variants[0]]),
      };
    });
};

export const getStateTypes = (variant = {}) => {
  return Object.keys(variant)
    .filter((stateKey) => stateKey.includes("&:"))
    .map((stateKey) => stateKey.split("&:")[1]);
};
