"use strict";

const matter = require('front-matter');

/* reads frontmatter into `data` field */

module.exports = (file, attributes = {}) => {
  const data = matter(file.contents.toString());
  file.contents = Buffer.from(data.body);
  file.data = {...attributes, ...data.attributes};
};
