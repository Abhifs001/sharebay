import React from 'react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Layout from '../components/Layout'
import pic from "../components/homes.jpg"
import { getAllCars } from '../redux/actions/action'
import Loading from '../components/Loading'
import { useNavigate } from 'react-router-dom'
// import { toast, ToastContainer } from 'react-toastify'
import { Link } from 'react-router-dom'
import { Row, Col, DatePicker, CheckBox } from 'antd';
import  moment from 'moment';
const { RangePicker } = DatePicker;



const DisplayEV = () => {
  const navigate = useNavigate();
  const { cars } = useSelector(state => state.reducer)
  const { loading } = useSelector(state => state.loading)
  const dispatch = useDispatch();
  const userInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem("userInfo")) : null;
  const [totalCar, setTotalCar] = useState([]);

  console.log(cars)
  useEffect(() => {
    dispatch(getAllCars());
    if (!localStorage.getItem("userInfo")) {
      localStorage.getItem("userInfo");
      navigate('/login');
    }

  }, [dispatch])

  useEffect(() => {

    setTotalCar(cars)
  }, [cars])

  const setFilter = (values) => {
    var selectedFrom = moment(values[0], 'MMM DD YYYY HH:mm') 
      var selectedTo = moment(values[1], 'MMM DD YYYY HH:mm') 
    var temp = [];
    for (var car of cars) {
      if (car.bookingSlots == 0) {
        temp.push(car);
      } else {

        for (var booking of car.bookingSlots) {
          if (selectedFrom.isBetween(booking.from, booking.to) ||
            selectedTo.isBetween(booking.from, booking.to) ||
            moment(booking.from).isBetween(selectedFrom, selectedTo) ||
            moment(booking.to).isBetween(selectedFrom, selectedTo)
          ) {

          }
          else {
            temp.push(car)
          }

        }

      }
    }
    setTotalCar(temp)
  }

  return (
    <Layout>
      <div className="slider">
        <div className="left">
          <h1  >Find your EVs in just one click!</h1>

        </div>
        <div className="right">
          <img src={pic} alt="" />
        </div>

      </div>
      <div className='content' >
        <div className="content-row">
          < h1 className='big-title' >  Top Electric Vehicles</h1>

        </div>
        <div className="content-row">

        </div>
        <div className="content-row">
        <div className='filterTitle' >
        <h2 className='button-36' > Filter by Availability </h2>
        </div>
          <Row className='filteringOption' >
            <Col lg={20} sm={24} >
              <RangePicker showTime={{ format: 'HH:mm' }} format= 'MMM:DD:YYYY HH:mm' onChange={setFilter} />
            </Col>
          </Row>
          {loading == true && (<Loading />)}

          <div className="content-groups">
            {totalCar.map((vehicle) => (
              <div className="card" key={vehicle._id}   >

                <div className="card-body">
                  <img src={vehicle.image} className='img-cars' alt={vehicle.name} />

                </div>
                <div className="card-footer">
                  <div className="card-footer-top">
                    <h3 className='card-title'   >{vehicle.name}</h3>
                    <p className='per-hr-charge'  >Per Hour Charge: INR <span className='bold-price' > {(vehicle.ratePerHour).toFixed(2)}</span></p>
                  </div>
                  <div className="card-footer-bootom">
                    <button className='book-now'  >   <Link to={`/vehicle/${vehicle._id}`} className='rent-link'   > Book Now</Link>         </button>
                  </div>
                </div>
              </div>
            ))}
          </div>



        </div>

      </div>
    </Layout>
  )
}

export default DisplayEV