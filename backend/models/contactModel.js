const { model, Schema } = require('../connection');

const mySchema = new Schema({
    fname: { type: String, require: true },
    lname:{type:String,require:true},
    email: { type: String, unique: true },
    message:{type:String,unique:true},
    createdAt: { type: Date, default: Date.now }
})

module.exports = model('contact', mySchema);