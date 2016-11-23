var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var ContactSchema   = new Schema({
    name: String,
    to: String,
    from: String,
    cc: Array,
    bb: String,
    subject: String,
    message: String,
    provider: String
});

module.exports = mongoose.model('Contact', ContactSchema); 
