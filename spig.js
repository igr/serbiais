const { Spig } = require('spignite');

Spig.hello();

// PAGES

Spig
  .on('/**/*.{md,njk,pug}')
  .watchSite()

  ._('INIT')
  .pageMeta()
  .pageLinks()
  .summary()
  .collect('id')

  ._('RENDER')
  .render()
  .applyTemplate()
  .htmlMinify()
;

// IMAGES

Spig
  .on('/**/*.{png,jpg,gif}')

  ._('INIT')
  .assetLinks()

  ._('ASSETS')
  .imageMinify()
;


Spig.run();
