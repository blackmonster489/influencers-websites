const { model,Schema} = require('../connection');

const mySchema = new Schema({
    name : { type:String,require: true},
    email :{type: String},
    password : String,
    followers:String,
    socialLinks:String,
    phoneNumber:String,
    bio:String,
    photo:String,
    gender:String,
    
    createdAt :{type:Date,default:Date.now}
})

module.exports =model('userprofile',mySchema);