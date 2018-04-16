var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var udidSchema = new Schema({
    fdi: String,
    pdi: String,
    di: String,
    content: String,
    createTime: {
        type: Date,
        default: Date.now
    }
});
// Number
exports.Demo = mongoose.model('demo', udidSchema, 'demo');