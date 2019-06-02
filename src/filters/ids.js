"use strict";

module.exports = {

  extractIds: (val) => {
    const results = [];

    for (const k in val){
      if (val.hasOwnProperty(k)) {
        results.push(parseInt(k));
      }
    }

    return results.sort().reverse();
  },

};
