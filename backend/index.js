const express = require('express')
const userRouter = require('./routers/userRouter');
const brandRouter = require('./routers/brandRouter');
const campaignRouter = require('./routers/campaignRouter');
const enrollmentRouter = require('./routers/enrollmentRouter');
const contactRouter = require('./routers/contactRouter');
const userprofileRouter = require('./routers/userprofileRouter');

const cors = require('cors');

const app =express();
const port =5000;
//middleware

app.use(cors({
    origin:["http://localhost:3000"]
}));
app.use(express.json());

app.use('/user', userRouter);
app.use('/brand', brandRouter);
app.use('/campaign', campaignRouter);
app.use('/enrollment', enrollmentRouter);
app.use('/userprofile', userprofileRouter);


app.get('/',(req , res)=> {
    res.send('respose from express')
});
app.get('/add',(req,res)=> {
    res.send('response from add -----')
})

//endpoint
app.listen(port,()=> {console.log('server started');})