class TwitterController {
  constructor(wagner) {
    this.wagner = wagner;
  }

  async fetchSource(source) {
    try {
      const tweets = await this.wagner.get('Twitter').get('search/tweets', {
        q: source,
        count: 10
      }, function(err, data, response) {
        return data;
      });
      console.log(tweets);
      return { code: 200, data: {} };
    } catch(error){
      error.status = error.status || 400;
      return { code: error.status, data: { message: error.message } };
    }
  }
}

module.exports = TwitterController;