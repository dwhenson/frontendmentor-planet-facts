module.exports = (config) => {
  config.addPassthroughCopy("./src/assets/");

  // // Disable browsersync
  // config.setBrowserSyncConfig({
  //   snippetOptions: {
  //     // Regex that will never match, so snippet never added.
  //     rule: {
  //       match: /no-such-element/,
  //     },
  //   },
  // });

  return {
    markdownTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    htmlTemplateEngine: "njk",

    dir: {
      input: "src",
      output: "dist",
    },
  };
};
