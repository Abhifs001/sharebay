import axios from 'axios'
 
import { toast } from 'react-toastify';

 export const bookEV =(reqObj)=>async dispatch =>{
     
    dispatch({type:'LOADING', payload:true});
    try{
         await axios.post('/api/booking/bookingcar', reqObj);
         dispatch({type:'LOADING', payload:false});
         toast.success('Booking Successful');
         setTimeout(() => {
            window.location.href='/user-bookings'
         }, 500);
 
          


    }catch(error){
        console.log(error);
        toast.error("Error Occured! Please Try again");
        dispatch({type:'LOADING', payload:false});
    }
}

export const getAllBookings =()=>async dispatch =>{
    dispatch({type:'LOADING', payload:true});
    try{
        const cars =await axios.get('/api/booking/getallbookings');

        dispatch({type:'GET_ALL_BOOKINGS', payload:cars.data});
        dispatch({type:'LOADING', payload:false});

    }catch(error){
        console.log(error);
        dispatch({type:'LOADING', payload:true});
    }
}

export const registerCar=(reqObj)=>async dispatch =>{
    dispatch({type:'LOADING', payload:true});
    try{
            await axios.post('/api/vehicle/registercar', reqObj);
            dispatch({type:'LOADING', payload:false});
            toast.success("Vehicle Registered!")
            setTimeout(() => {
                window.location.href='/vehicles'
            }, 500);

    }catch(error){
        console.log(error);
        dispatch({type:'LOADING', payload:false});
    }
}