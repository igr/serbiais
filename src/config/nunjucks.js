"use strict";

const rs = require('./filters/rs');

module.exports = nunjucksEnv => {
  nunjucksEnv
    .addFilter('rsDateShort', rs.dateShort)
    .addFilter('rsDateLong', rs.dateLong)
  ;
};
