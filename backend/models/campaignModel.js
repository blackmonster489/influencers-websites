const { model, Schema, Types } = require('../connection');

const mySchema = new Schema({
    brand: { type: Types.ObjectId, ref: 'brand' },
    title : String,
    
    createdAt: { type: Date, default: Date.now }
})

module.exports = model('campaign', mySchema);