
import React from 'react'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'
import Layout from '../components/Layout'
import axios from 'axios'
import { DatePicker,   Modal } from 'antd';
import moment from 'moment';
import { useDispatch } from 'react-redux'
import { bookEV } from '../redux/actions/booking'
import StripeCheckout from 'react-stripe-checkout';

const { RangePicker } = DatePicker


const Vehicle = () => {

  const dispatch = useDispatch();
  const [vehicle, setVehicle] = useState([]);
  const [from, setFrom] = useState();
  const [to, setTo] = useState();
  const [totalHr, setTotalHours] = useState(0);
  const [amount, setTotalAmount] = useState(0);
  const [driver, setDriver] = useState(false);
  const params = useParams()
  const { vehicleId } = params;
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const userInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem("userInfo")) : null;




  //Only logged in users can visit the booking page 
  useEffect(() => {
    if (!localStorage.getItem("userInfo")) {
      localStorage.getItem("userInfo");
      navigate('/login');
    }

    const fetchData = async () => {
      try {
        const result = await axios.get(`/api/vehicle/vehicle/${vehicleId}`)
        console.log(result.data)
        setVehicle(result.data)

      } catch (error) {
        console.log(error);

      }
    }
    fetchData();
    setTotalAmount((totalHr * vehicle.ratePerHour) + (driver && (totalHr * 60)))


  }, [vehicleId, navigate, driver, totalHr, vehicle.ratePerHour])

  const selectTime = (values) => {
    setFrom(moment(values[0]).format('MMM DD YYYY HH:mm'));
    setTo(moment(values[1]).format('MMM DD YYYY HH:mm'));
    console.log(moment(values[0]).format('MMM DD YYYY HH:mm'));
    console.log(moment(values[1]).format('MMM DD YYYY HH:mm'));
    setTotalHours(values[1].diff(values[0], 'Hours'));
  }

  
  const onToken=(token)=>{
    console.log(token);
    const reqObj = {
        token,
      user: userInfo._id,
      vehicle: vehicle._id,
      totalHr,
      amount,
      driverRequired: driver,
      bookingSlots: {
        from,
        to
      },
     
    };
    dispatch(bookEV(reqObj));

  }
   
  return (
    <Layout>
      <div className="vehicle-container">
        <h3 className='vehicle-title'  >Hire your EV</h3>
        <div className="vehicle-row">
        <div className="vehicle-col">
            <div className="vehicle-img">
              <img src={vehicle.image} className='ev-img' alt={vehicle.name} />

            </div>

          </div>
          <div className="vehicle-col">
            <div className="vehicle-grps">
              <div className="vehicle-grp">

                <h2 className='vehicle-subtitle' >Details of EV</h2>
                <div className="vehicle-info">
                  <span> Brand Name: {vehicle.name}  </span>
                  <span> Rate per Hour(INR):   {(vehicle.ratePerHour)?.toFixed(2)}</span>
                  <span> Battery Type:   {vehicle.batteryType}</span>
                  <span> Capacity per Charge(Kms):   {vehicle.limitPerCharge}</span>
                </div>
              </div>
              <div className="vehicle-grp">

                <h2 className='vehicle-subtitle' >Select Booking Slot</h2>
                <div className="vehicle-info" >
                  <RangePicker showTime={{ format: 'HH:mm' }} format='MMM:DD:YYYY HH:mm' onChange={selectTime} />
                  <button className='button-36 ' onClick={() => { setShowModal(true) }}>
                    See Booking Slots
                  </button>
                  {from && to && (
                    <>

                      <span className='driver'   > Total Hours of Booking:   {totalHr}</span>
                      <p className='driver'   > <label htmlFor="driver" className='driver-label'   >Driver Required?</label>
                        <input type="checkbox" name="" id="" onChange={(e) => {
                          if (e.target.checked) {
                            setDriver(true);
                          } else {
                            setDriver(false)
                          }

                        }
                        } /></p>
                      <div className="total-amount">
                        <h1 className="total-title">
                          Amount Payable(INR): {(amount)?.toFixed(3)}
                        </h1>
                      </div>
                      <StripeCheckout
                      currency='inr'
                        amount={amount*100}
                      shippingAddress
                        token={onToken}
                        stripeKey="pk_test_51MQb02SCIMxBFxxTjZjnHJ2aYyehXLDAoQB1FonCAqdOysCJLkmfj2zo5YxB9U9BhrlcH3HZBfbRGK2qgy8NgaNQ00y9rLojYH"
                      > <button className='book-now'   >Book Now!</button> </StripeCheckout>


                    </>
                  )}
                </div>
              </div>

            </div>
          </div>

          
        </div>

      </div>
      {vehicle && (
        <Modal open={showModal} closable={false} footer={false} title='Booked Slots for Car' >
          {vehicle && (<div   >
            {
              vehicle.bookingSlots?.map(slot => {
                return <button className='modal-popup' > {slot.from} to {slot.to} </button>
              })
            }
            <div>
              <button className='logout' onClick={() => { setShowModal(false) }} > Close</button>
            </div>
          </div>)}

        </Modal>
      )}
    </Layout>
  )
}

export default Vehicle



