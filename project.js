const path = require('path');
const fs = require('fs');

// Ensure that the path to a file exists when saving

function ensureDirectoryExist(filePath) {
  var dirname = path.dirname(filePath);
  if (fs.existsSync(dirname)) {
    return true;
  }
  ensureDirectoryExist(dirname);
  fs.mkdirSync(dirname);
}


module.exports = {

  srcDir:       './src',
  outDir:       './out',
  siteDir:      './src/site',
  outJsDir:     './src/site/_includes/js',
  outCssDir:    './src/site/_includes/css',

  /* Save some data to a local file for use in the build. */
  storeData: function(fileName, data) {
    const targetFile = process.cwd() + fileName;
    ensureDirectoryExist(targetFile)
    fs.writeFile(targetFile, data, function(err) {
      if (err) {
        console.log(err);
      } else {
        console.log(`Saved: ${process.cwd()}/${fileName}`);
      }
    });
  },
};
