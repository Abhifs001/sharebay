import React from 'react'
import Layout from '../components/Layout'
import {Row, Col, Form, Input} from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import {registerCar} from  '../redux/actions/booking'
import Loading from '../components/Loading'
const RegisterEV = () => {
  const dispatch= useDispatch();
  const {loading}= useSelector(state=>state.loading)
const onFinish=(values)=>{
    values.bookingSlots=[]
    console.log(values);
    dispatch(registerCar(values));
}

  return (
    <Layout> 
      {loading && <Loading/>}
      <h1 className='submitEV-title'  >Submit Vehicle Details </h1>
         <Row justify='center' >
            <Col lg={10} sm={24}  >
           <Form   layout='vertical' onFinish={onFinish} >
          <Form.Item    name='name'  label={<label style={{ color: "white" }}>Vehicle Name</label>} rules={[{required:true}]}  > 
         <Input/>
         </Form.Item>
         <Form.Item name='image' label={<label style={{ color: "white" }}>Upload Image in Drive and Share Image URL</label>} rules={[{required:true}]}  > 
         <Input/>
         </Form.Item>
         <Form.Item name='batteryType'label={<label style={{ color: "white" }}>Battery Type</label>} rules={[{required:true}]}  > 
         <Input/>
         </Form.Item>
         <Form.Item name='limitPerCharge' label={<label style={{ color: "white" }}>Capacity per Charge</label>} rules={[{required:true}]}  > 
         <Input/>
         </Form.Item>
         <Form.Item name='ratePerHour' label={<label style={{ color: "white" }}>Expected Rate per Hour</label>} rules={[{required:true}]}  > 
         <Input/>
         </Form.Item>
             <button className='logout'  >Submit</button>
           </Form>
          </Col>

         </Row>
    </Layout>
  )
}

export default RegisterEV