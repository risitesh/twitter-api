const app = require('./app');

const port = process.env.PORT || 4000;
app.set('port', port);
app.listen(port);
