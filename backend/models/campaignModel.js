const { model, Schema, Types } = require('../connection');

const mySchema = new Schema({
    brand: { type: Types.ObjectId, ref: 'brand' },
    headline : String,
    startingdate:String,
    enddate:String,
    image:String,

    
    createdAt: { type: Date, default: Date.now }
})

module.exports = model('campaign', mySchema);