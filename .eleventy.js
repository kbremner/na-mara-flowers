require("dotenv").config();
const CleanCSS = require("clean-css");
const includeAll = require("./_includes/shorcodes/includeAll");

module.exports = function (eleventyConfig) {
  eleventyConfig.addFilter("cssmin", function (code) {
    return new CleanCSS({}).minify(code).styles;
  });

  eleventyConfig.addAsyncShortcode("includeAll", includeAll);
};
