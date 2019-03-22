"use strict";

const Spig = require('./spig/spig');
require('require-dir')('./spig');

Spig
  .on('/**/*.md')
  .frontmatter()
  .markdown()
  .use((file) => {
    console.log(file.path);
    console.log(file.relative);
  });
