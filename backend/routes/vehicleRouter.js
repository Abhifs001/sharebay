import express  from "express";
import data from "../data.js ";
import Vehicles from "../models/vehicleModel.js";

const vehicleRouter= express.Router();

vehicleRouter.get('/getallvehicle', async (req, res)=>{
    const vehicles= await Vehicles.find(data);
    res.send(vehicles);

})
//getting vehicles by id 

vehicleRouter.get('/vehicle/:vehicleId', async (req, res)=>{
    const vehicle= await Vehicles.findById({_id:req.params.vehicleId})

    if(vehicle){
        res.send(vehicle)
    }else{
        res.status(404).send({message:'Vehicle Not Found '});
    }
})

vehicleRouter.post('/registercar', async(req,res)=>{
    try {
        const vehi = new Vehicles(req.body);
         
        await vehi .save();
            

        res.send('Car Registered Successfully');
    } catch (error) {
        return res.status(404).json(error);
    }

})
export default vehicleRouter;