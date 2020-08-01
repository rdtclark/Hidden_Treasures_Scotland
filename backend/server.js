const express = require('express');
const app = express();
const parser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js')
const cors = require('cors');
const config = require('./config/Config');


app.use(cors())
app.use(parser.json());

MongoClient.connect(config.DB)
  .then((client) => {
    const db = client.db('hidden_treasures')
    const treasureCollection = db.collection('treasures')
    const treasureRouter = createRouter(treasureCollection)
    app.use('/api/treasures', treasureRouter)
  })
  .catch(console.error)

app.listen(config.APP_PORT, function () {
  console.log(`Listening on port ${ this.address().port }`);
});
