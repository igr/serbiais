"use strict";

const shortNames = {
  1: "јан",
  2: "феб",
  3: "мар",
  4: "апр",
  5: "мај",
  6: "јун",
  7: "јул",
  8: "авг",
  9: "сеп",
  10: "окт",
  11: "нов",
  12: "дец",
};

const fullNames = {
  1: "јануар",
  2: "фебруар",
  3: "март",
  4: "април",
  5: "мај",
  6: "јун",
  7: "јули",
  8: "август",
  9: "септембар",
  10: "октобар",
  11: "новембар",
  12: "децембар"
};

module.exports = {
  dateShort: (dateObj) => {
    const monthName = shortNames[dateObj.getMonth() + 1];
    return dateObj.getDate() + '. ' + monthName + ' ' + dateObj.getFullYear();
  },
  dateLong: (dateObj) => {
    const monthName = fullNames[dateObj.getMonth() + 1];
    return dateObj.getDate() + '. ' + monthName + ' ' + dateObj.getFullYear();
  }
};
