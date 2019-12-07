module.exports = (app, wagner) => {
  require('./api/twitter')(app, wagner);
  app.get('/health', (req, res) => res.sendStatus(200));
};