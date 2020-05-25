const express = require('express');
const ObjectID = require('mongodb').ObjectID

const createRouter = function (collection) {

  const router = express.Router();

    router.get('/', (req, res) => {
      collection
        .find()
        .toArray()
        .then((docs) => {
          console.log(res.json(docs));
          res.json(docs)
        })
        .catch((err) => {
          console.error(err)
          res.status(500)
          res.json({status: 500, error: err });
      });
    });

    router.get('/:id', (req, res) => {
      const id = req.params.id;
      collection
        .findOne({ _id: ObjectID(id) })
        .then((doc) => res.json(doc))
        .catch((err) => {
          console.error(err)
          res.status(500)
          res.json({status: 500, error: err });
        });
    });

    router.post("/", (req, res) => {
      const data = req.body;
      collection
        .insertOne(data)
        .then(doc => {
          res.json(doc.ops[0])
        })
        .catch((err) => {
          console.error(err);
          res.status(500);
          res.json({status: 500, error: err})
        })
    })
  
    return router;
    
}

module.exports = createRouter;
