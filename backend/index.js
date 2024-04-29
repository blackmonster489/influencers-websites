const express = require('express')
const userRouter = require('./routers/userRouter');
const cors = require('cors');

const app =express();
const port =5001;
//midle ware

app.use(cors({
    origin:["http://localhost:3000"]
}));
app.use(express.json());

app.use('/user', userRouter);

app.get('/',(req , res)=> {
    res.send('respose from express')
});
app.get('/add',(req,res)=> {
    res.send('response from add -----')
})

//endpoint
app.listen(port,()=> {console.log('server started');})