module.exports = (eleventyConfig) => {
  // Pass through static assets
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/favicon.svg");

  // Watch for changes
  eleventyConfig.addWatchTarget("src/assets/css/");
  eleventyConfig.addWatchTarget("src/assets/js/");

  // Custom filters
  eleventyConfig.addFilter("formatPeriod", (period) => {
    const start = period.start;
    const end = period.end || (period.current ? "Present" : null);
    return `${start} - ${end}`;
  });

  eleventyConfig.addFilter("join", (array, separator = ", ") => {
    if (!array || !Array.isArray(array)) return '';
    return array.join(separator);
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    templateFormats: ["njk", "html", "md"],
    htmlTemplateEngine: "njk",
    serverOptions: {
      port: 3000,
      host: "127.0.0.1"
    }
  };
};
