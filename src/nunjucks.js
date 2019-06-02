"use strict";

const ids = require('./filters/ids');

module.exports = nunjucksEnv => {
  nunjucksEnv
    .addFilter('extractIds', ids.extractIds)
  ;
};
