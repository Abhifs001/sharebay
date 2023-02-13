import express from "express";
import Booking from "../models/bookingModel.js";
import Vehicles from "../models/vehicleModel.js";
const bookingRoute= express.Router();
import Stripe from 'stripe';
import { v4 as uuidv4 } from 'uuid';
const stripe = new Stripe(`${process.env.STRIPE_KEY}`);



bookingRoute.post('/bookingcar', async (req,res)=>{
        const {token}= req.body;
        try {
             
             const customer = await stripe.customers.create({
               
                email:token.email,
                source:token.id
             });
             
             //creating payment 
             
             const payment = await stripe.paymentIntents.create(
                 {
                     amount:req.body.amount *100,
                     currency:'inr',
                     customer:customer.id,
                     receipt_email:token.email,
                     payment_method: 'pm_card_visa',
                     confirm:true,
                    }, {
    
                        idempotencyKey: uuidv4(),
                    }
                    );
                    // if payment is success full below responses will be sent 
                    //  console.log(payment);
                     
           if(payment){
             //payment is the transaction  Id 

            console.log(payment.customer);
           
            req.body.transactionId= payment.id;
            const newBooking = new Booking(req.body);
            await newBooking.save();
            const vehicle= await Vehicles.findById({_id:req.body.vehicle });
            vehicle.bookingSlots.push(req.body.bookingSlots);
            await vehicle.save();
            res.send('Your Booking is successful')
           }else{
            
            return res.status(400).json(error);

           }
       
        } catch (error) {
            return res.status(400).json(error);
            
        }
    })
    bookingRoute.get('/getallbookings', async(req,res)=>{
        try {

            const bookings = await Booking.find().populate('vehicle');
     
            res.send(bookings)
        } catch (error) {
            return res.status(400).json(error);
        }
    })

    export default bookingRoute;