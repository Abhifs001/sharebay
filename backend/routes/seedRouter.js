import express from "express";
import data from "../data.js";
import Vehicles from "../models/vehicleModel.js";

const seedRouter= express.Router();

seedRouter.get('/', async (req, res)=>{
    await Vehicles.remove({});
    const createdEV=await Vehicles.insertMany(data.cars);

    res.send({createdEV});

})
export default seedRouter;
