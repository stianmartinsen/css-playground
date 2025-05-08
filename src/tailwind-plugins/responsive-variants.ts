import plugin from "tailwindcss/plugin";

const responsiveVariantsPlugin = plugin.withOptions(function () {
  return function ({ addVariant, theme }) {
    const screens = theme("screens");

    for (const [key] of Object.entries(screens).filter(
      ([key]) => key !== "__CSS_VALUES__"
    )) {
      addVariant(
        `component-size-${key}`,
        `@container (style(--component-size: ${key}))`
      );
    }

    // '{sm,md,lg,xl,2xl}:[--component-size:{sm,md,lg}}'

    // const safelist = [
    //   "[--component-size:sm]",
    //   "[--component-size:md]",
    //   "[--component-size:lg]",
    //   "sm:[--component-size:sm]",
    //   "sm:[--component-size:md]",
    //   "sm:[--component-size:lg]",
    //   "md:[--component-size:sm]",
    //   "md:[--component-size:md]",
    //   "md:[--component-size:lg]",
    //   "lg:[--component-size:sm]",
    //   "lg:[--component-size:md]",
    //   "lg:[--component-size:lg]",
    //   "xl:[--component-size:sm]",
    //   "xl:[--component-size:md]",
    //   "xl:[--component-size:lg]",
    //   "2xl:[--component-size:sm]",
    //   "2xl:[--component-size:md]",
    //   "2xl:[--component-size:lg]",
    // ];
  };
});

export default responsiveVariantsPlugin;
