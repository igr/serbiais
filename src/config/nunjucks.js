"use strict";

const ids = require('./config/filters/ids');

console.log("AAAAAAAAAAAA")
module.exports = nunjucksEnv => {
  nunjucksEnv
    .addFilter('extractIds', ids.extractIds)
  ;
};
