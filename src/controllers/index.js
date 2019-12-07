module.exports = (wagner) => {
  wagner.factory('TwitterController', () => {
    const TwitterController = require('./twitter-controller');
    return new TwitterController(wagner);
  });
};
