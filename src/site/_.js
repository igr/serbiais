module.exports = (fileRef) => {
  if (fileRef.hasAttr('id')) {
    return {
      layout: 'id'
    };
  }
};
