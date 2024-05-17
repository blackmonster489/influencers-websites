const { model, Schema, Types } = require('../connection');

const mySchema = new Schema({
    campaign: { type: Types.ObjectId, ref: 'campaign' },
    influencer: { type: Types.ObjectId, ref: 'user' },
    proof: Object,
    createdAt: { type: Date, default: Date.now }
})

module.exports = model('enrollment', mySchema);