module.exports = (app, wagner) => {
  const twiiterController = wagner.get('TwitterController');

  app.get('/api/tweets/', async (req, res) => {
    const source = req.query.source;
    const result = await twiiterController.fetchSource(source);
    res.status(result.code).json(result.data);
  });
};
