import React from 'react'
import Layout from '../components/Layout'
import {  useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBookings } from '../redux/actions/booking'
import {Row, Col} from 'antd';
import  moment from 'moment';
import Loading from '../components/Loading'
 
const MyBookings = () => {
  const user = JSON.parse(localStorage.getItem("userInfo"));
   const dispatch= useDispatch();
   const {bookings}= useSelector((state)=>state.bookingReducer);
   const {loading}= useSelector((state)=>state.loading)
  useEffect(() => {
    dispatch(getAllBookings());
    
  }, [ ])
  
  return ( 

       <Layout>
        {loading && <Loading/>}
      <div>  <h1  className='My-booking'>My Bookings</h1></div>
        <Row justify='center' >
                    
                    <Col lg={16} sm={24}  >
                    
                          {bookings.filter(o=>o.user===user?._id).map(booking=>{
                          return (
                            <Row className='adminHome'  >
                          <Col lg={6} sm={24} className='adminHomeCard' > 
                             
                              <p> Total Hours : {booking.totalHr }   </p>
                              <p> Total amount paid : {booking.amount}   </p>
                              <p> Rate per Hour : {booking.vehicle?.ratePerHour}  </p>
                          </Col>
                          <Col lg={12} sm={24} className='adminHomeCard' >
                            
                              <p> Transaction_Id: {booking.transactionId}   </p>
                              <p>  From: {booking.bookingSlots?.from}   </p>
                                <p>  To: {booking.bookingSlots?.to}   </p>
                                <p>  Date of Booking: {moment(booking.createdAt).format('MMM DD YYYY')}   </p>
                            
                          </Col>
                            <Col  lg={6} sm={24} className='adminHomeCard'  >
                           <img className='bookingCarPic'  src={booking.vehicle?.image } alt="" />  
                           <p> <h3><b> {booking.vehicle?.name }   </b></h3></p>                            
                          </Col>
                            </Row>

                          );
                          
                         })}
                    </Col>
        </Row>
       </Layout>
  )
}

export default MyBookings