const fs = require("fs");
const path = require("path");

const MIME = { png: "image/png", jpg: "image/jpeg", jpeg: "image/jpeg", svg: "image/svg+xml" };

module.exports = (eleventyConfig) => {
  // Pass through static assets
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/favicon.svg");
  eleventyConfig.addPassthroughCopy({"src/pdf/*.pdf": "."});

  // Watch for changes
  eleventyConfig.addWatchTarget("src/assets/css/");
  eleventyConfig.addWatchTarget("src/assets/js/");

  // Custom filters
  eleventyConfig.addFilter("formatPeriod", (period) => {
    const start = period.start;
    const end = period.end || (period.current ? "Present" : null);
    return `${start} - ${end}`;
  });

  // Inlines a file from src/ as a base64 data URI. The PDF pipeline renders
  // markdown outside any web root, so relative image paths cannot resolve.
  eleventyConfig.addFilter("dataUri", (assetPath) => {
    const file = path.join(__dirname, "src", assetPath.replace(/^\//, ""));
    const ext = path.extname(file).slice(1).toLowerCase();
    const mime = MIME[ext];
    if (!mime) throw new Error(`dataUri: unsupported extension "${ext}" for ${assetPath}`);
    return `data:${mime};base64,${fs.readFileSync(file).toString("base64")}`;
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
