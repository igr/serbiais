"use strict";

const Spig     = require('./spig/spig');
require('require-dir')('./spig');



Spig
  .on('/**/*.md')
  .frontmatter()
  .use((file) => {
    console.log(file.data);
  });
