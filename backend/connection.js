const mongoose = require('mongoose');

const url = 'mongodb+srv://vshagun489:1234@cluster0.yke2mdv.mongodb.net/mydatabase?retryWrites=true&w=majority&appName=Cluster0'

//asynchronous function
mongoose.connect(url)
.then((result) =>{
    console.log('connect to db');
}).catch((err)=>{
    console.log(err);
});

module.exports = mongoose;