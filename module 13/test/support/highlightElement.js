let highlightElement = (alias) => {
  let styleOptions = "color: Red; border: 2px solid red;";
  return browser.execute((styleOpt) => {
    document.querySelector('button').setAttribute('style', styleOpt);
  }, styleOptions);
};
module.exports = { highlightElement }