import express from 'express'
 
import mongoose from 'mongoose';
import vehicleRouter from './routes/vehicleRouter.js';
import seedRouter from './routes/seedRouter.js';
import userRoute from './routes/userRoute.js';
import bookingRoute from './routes/bookingRoute.js';

import dotenv from 'dotenv' 
dotenv.config()

const app = express();
app.use(express.json())
app.use(express.urlencoded({extended:true})) 

app.use('/api/seed/', seedRouter)
app.use('/api/vehicle/', vehicleRouter)
app.use('/api/users/', userRoute)
app.use('/api/booking/',  bookingRoute)


import path from 'path';

if(process.env.NODE_ENV=='production'){
    app.get('/', express.static('fronted/build') );//to tell the compiler where to search the client folder 

    //tell the compiler to search all the request endpoints in the index.html
    app.get("*", (req,res)=>{
        res.sendFile(path.resolve(__dirname, 'fronted/build/index.html'))
    })
}
//create port
const port= process.env.PORT|| 5000;

//connect to db
// console.log(`${process.env.STRIPE_KEY}`);
const Connection_string=  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.k9pksqa.mongodb.net/test`

 

mongoose.connect(Connection_string ).then(()=>{
console.log("Connected to Database");
}).catch((error)=>{
    console.log(error.message);
})


app.listen(port, ()=>{
    console.log(`Server at: http://localhost:${port}`);
})