const { model, Schema } = require('../connection');

const mySchema = new Schema({
    name: { type: String, require: true },
    email: { type: String, unique: true },
    password: String,
    logo: String,
    industry: String,
    description: String,
    createdAt: { type: Date, default: Date.now }
})

module.exports = model('brand', mySchema);