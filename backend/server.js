import express from 'express'
 
import mongoose from 'mongoose';
import vehicleRouter from './routes/vehicleRouter.js';
import seedRouter from './routes/seedRouter.js';
import userRoute from './routes/userRoute.js';
import bookingRoute from './routes/bookingRoute.js';
 
const app = express();
app.use(express.json())
app.use(express.urlencoded({extended:true})) 

app.use('/api/seed/', seedRouter)
app.use('/api/vehicle/', vehicleRouter)
app.use('/api/users/', userRoute)
app.use('/api/booking/',  bookingRoute)


//create port
const port= process.env.PORT|| 5000;

//connect to db
const Connection_string= 'mongodb+srv://pandeyabhi31:WoEl5Pa01qb5mclz@cluster0.k9pksqa.mongodb.net/test'
 
mongoose.connect(Connection_string).then(()=>{
console.log("Connected to Database");
}).catch((error)=>{
    console.log(error.message);
})

app.listen(port, ()=>{
    console.log(`Server at: http://localhost:${port}`);
})