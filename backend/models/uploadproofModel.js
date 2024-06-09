const { model, Schema, Types } = require('../connection');

const mySchema = new Schema({
    image: String,

    createdAt: { type: Date, default: Date.now }
})

module.exports = model('uploadproof', mySchema);