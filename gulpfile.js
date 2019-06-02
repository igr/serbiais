"use strict";

const Spig = require('./spig/spig');
require('require-dir')('./spig/tasks');

// PAGES

Spig
  .on('/**/*.{md,njk}')

  ._("INIT")
  .pageCommon()
  .collectAttr('id')
  .use((file) => {
    if (file.attr.hasOwnProperty('id')) {
      file.attr.layout = "id"
    }
  })

  ._("RENDER")
  .render()
  .applyTemplate()
  .htmlMinify()
;


// IMAGES

Spig
  .on('/**/*.{png,jpg,gif}')

  ._("INIT")
  .assetCommon()

  ._("ASSETS")
  .imageMinify()
;
