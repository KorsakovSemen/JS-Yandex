/**
 * @param {String} tweet
 * @returns {String[]}
 */
module.exports = function (tweet) {
  let allWords = tweet.split(' ');
  let res = [];
  allWords.forEach(element => {
    if(element.startsWith('#'))
      res.push(element.slice(1));
  });
  return res;

};
