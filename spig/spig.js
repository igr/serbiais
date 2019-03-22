"use strict";

const site = {
  name:    'spig site',
  version: '1.0.0',

  // main folders
  srcDir:       './src',
  outDir:       './out',

  // relative folders
  dirSite:      '/site',
  dirImages:    '/images',
  dirJs:        '/js',
  dirData:      '/data',
  dirCss:       '/css',
  dirStatic:    '/static',

  // images to be resized
  resizeImageSizes:  [400, 1000]
};


const spigs = [];
class Spig {

  /** returns site defaults */
  static site() {
    return site;
  }

  /* iterates all SPIGs definitions */
  static forEach(fn) {
    spigs.forEach(fn);
  }

  static on(files) {
    const s = new Spig(files);
    spigs.push(s);
    return s;
  }

  constructor(files) {
    this.files = site.srcDir + site.dirSite + files;
    this.out = site.outDir;
    this.tasks = [];
    this.dev = process.env.NODE_ENV !== 'production';
  }

  /* does something with files */
  use(fn) {
    this.tasks.push(fn);
    return this;
  }

  /* defines custom out folder */
  out(folder) {
    this.out = site.outDir + folder;
    return this;
  }

  /* process files */
  withFiles(fn) {
    fn(this.files);
    return this;
  }
  withOut(fn) {
    fn(this.out);
    return this;
  }

  /* iterates all tasks */
  forEachTask(fn) {
    this.tasks.forEach(fn);
    return this;
  }

  // --- plugin commands ---

  frontmatter(attributes = {}) {
    const frontmatter = require('./plugins/frontmatter');
    return this.use((file) => frontmatter(file, attributes));
  }

  markdown() {
    const markdown = require('./plugins/markdown');
    return this.use((file) => markdown(file));
  }

}

module.exports = Spig;
