const project      = require("./project.js")
const { DateTime } = require("luxon");
const CleanCSS     = require("clean-css");
const UglifyJS     = require("uglify-es");
const htmlmin      = require("html-minifier");
const markdown     = require('markdown-it')({
    html: true,
    breaks: true,
    linkify: true,
    typographer: true,
  }).use(require('markdown-it-anchor'), {
    level: [2],
    permalink: false,
  });

const src = './src/11ty';

module.exports = function(eleventyConfig) {

  // CONFIG

  let env = process.env.ELEVENTY_ENV;

  eleventyConfig.setDataDeepMerge(true);

  // ALIASES

  eleventyConfig.addLayoutAlias('default', 'layouts/base.njk');

  // PLUGINS

  eleventyConfig.setLibrary("md", markdown);

  // FILTERS

  eleventyConfig.addFilter("squash", require(`${src}/squash.js`) );

  eleventyConfig.addFilter("dateDisplay", require(`${src}/dates.js`))

  eleventyConfig.addFilter("dateHuman", dateObj => {
    return DateTime.fromJSDate(dateObj).toFormat("dd LLL yyyy");
  });

  eleventyConfig.addFilter("dateStamp", dateObj => {
    return DateTime.fromJSDate(dateObj).toFormat("yyyy-MM-dd");
  });

  eleventyConfig.addFilter("cssmin", function(code) {
    return new CleanCSS({}).minify(code).styles;
  });

  eleventyConfig.addFilter("jsmin", function(code) {
    let minified = UglifyJS.minify(code);
    if (minified.error) {
      console.log("UglifyJS error: ", minified.error);
      return code;
    }
    return minified.code;
  });

  eleventyConfig.addFilter('markdownify', str => markdown.render(str));

  eleventyConfig.addFilter('markdownify_inline', str =>
    markdown.renderInline(str),
  );


  // TRANSFORM

  eleventyConfig.addTransform("htmlmin", function(content, outputPath) {
    if (outputPath.indexOf(".html") > -1) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true
      });
      return minified;
    }
    return content;
  });

  // COLLECTIONS

//  eleventyConfig.addCollection('posts', collection => {
//    return collection.getFilteredByGlob('posts/**/*.md');
//  });


  // PASSTHROUGH


  // RETURN

  return {
    templateFormats: ['njk', 'md', 'css', 'js', 'html', 'yml', 'png', 'jpg'],

    pathPrefix: "/",

    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    passthroughFileCopy: true,
    dir: {
      input: project.srcDir + "/site",
      includes: "_includes",
      data: "_data",
      output: project.outDir
    }
  };
};
