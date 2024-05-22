const { model, Schema, Types } = require('../connection');

const mySchema = new Schema({
    brand: { type: Types.ObjectId, ref: 'campaign' },
    brandname:String,
    description:String,
    startingdate: Date,
    enddate: Date,
    email:String,
    createdAt: { type: Date, default: Date.now }
})

module.exports = model('managebrand', mySchema);