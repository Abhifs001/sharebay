import mongoose from "mongoose";

const carSchema =  new mongoose.Schema({
    name: { type: String, required:true},
    image: { type: String, required:true},
    ratePerHour: { type: Number, required:true},
    batteryType: { type: String, required:true},
    bookingSlots: [
        {
            from:{type: String, required:true},
            to:{type: String, required:true}
        }
    ], 
    limitPerCharge:{type:Number, required:true}

},{
    timestamps:true
});

const Vehicles= mongoose.model('Vehicles', carSchema);
export default Vehicles; 