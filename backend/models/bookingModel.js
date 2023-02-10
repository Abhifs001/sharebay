import mongoose from "mongoose";

const bookingSchema =  new mongoose.Schema({
     user:{type:mongoose.Schema.Types.ObjectId, ref:'User'},
     vehicle:{type:mongoose.Schema.Types.ObjectId, ref:'Vehicles' },
     totalHr:{type:Number},
     amount:{type:Number},
     driverRequired:{type:Boolean},
     bookingSlots:{
        from:{type:String},
        to:{type:String}
     },
     transactionId:{type:String}


},{
    timestamps:true
});

const Booking= mongoose.model('Booking', bookingSchema );
    export default Booking;