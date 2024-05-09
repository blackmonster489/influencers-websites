const { model,Schema} = require('../connection');

const mySchema = new Schema({
    name : { type:String,require: true},
    email :{type: String},
    password : String,
    followers:String,
    socialLinks:String,
    
    createdAt :{type:Date,default:Date.now}
})

module.exports =model('user',mySchema);