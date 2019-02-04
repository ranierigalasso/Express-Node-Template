const mongoose = require('mongoose');
const Test = require('../models/test');
conast db = require('../config');
const test = [
  { name: 'Macbook Pro', price: '5', imageURL: '' },
  { name: 'Macbook Air', price: '2', imageURL: '' }
];

mongoose.connect(db, { useNewUrlParser: true })
  .then(() => {
    console.log('connected to db');
    return Test.create(test);
  }).then((data) => {
    console.log('created data', data);
  }).then(() => {
    mongoose.connection.close();
  })
  .catch((error) => {
    console.log(error);
    mongoose.connection.close();
  });
