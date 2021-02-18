const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const qoutesData = require('../models/schema.js');

mongoose.connect('mongodb://localhost:27017/AT-Project', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Connected!'))
    .catch(err => console.log(err));


router.get('/quotes', (req, res) => {
     qoutesData.find((error, data) => {
         if (error) {
             return next(error);
         } else {
             res.json(data);
         }
     });
 });

module.exports = router;