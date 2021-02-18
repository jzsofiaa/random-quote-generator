const mongoose = require('mongoose');

const qoutesSchema = mongoose.Schema({
    qoute: String,
    by: String
}, {
    collection: 'quotes'
});

module.exports = mongoose.model('quotes', qoutesSchema);
