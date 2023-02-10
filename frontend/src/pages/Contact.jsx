import React from 'react'
import { useDispatch  } from 'react-redux';
import {   Form, Input,  } from 'antd';
import Layout from '../components/Layout'
import { UserOutlined, MailOutlined } from '@ant-design/icons'
import { Row, Col } from 'antd'
import axios from 'axios';
import { toast } from 'react-toastify';
const { TextArea } = Input
 

const Contact = () => {
  const dispatch = useDispatch();

const onFinish= async(values)=>{
  // values.preventDefault();
  
  console.log(values);
  dispatch({type: 'LOADING', payload: true});
  try {
      
     await axios.post('/api/users/submitquery', values);
     toast.success("Your Query has been Submitted!")
     dispatch({type: 'LOADING', payload: false});
     setTimeout(() => {
      window.location.href='/'
     }, 1000);
  } catch (error) {
    toast.error('Error occurred, Please try latter');
    dispatch({type: 'LOADING', payload: false});
  }


}

  return (
    <Layout>
         
        <Row justify='center' className='ctpar'>
        <Col  lg={10} sm={24} >
        <h2  className='about-title' >  Contact </h2>
            <Row  justify='center' className='contactDiv' >
              <Col lg={100} sm={24} >
              <Form
          
            onFinish={onFinish}
      
          style={{
            maxWidth: 700,
              alignContent:'center'
          }}
          autoComplete="off"
        >
  
          <Form.Item  
           label={<label style={{ color: "white" }}> Name</label>}
            rules={[{ required: true, message: `Please enter your name.` }]}
            name="name"
          >
            <Input
              placeholder="Name"
              prefix={<UserOutlined   />}
            />
          </Form.Item>
  
          <Form.Item
            label={<label style={{ color: "white" }}> Email</label>}
            rules={[{ required: true, type: `email`, message: `Please enter your email.` }]}
            name="email"
          >
            <Input
              placeholder="Your Email"
              prefix={<MailOutlined   />}
            />
          </Form.Item>
  
          <Form.Item
           label={<label style={{ color: "white" }}> Message</label>}
            rules={[{ required: true, message: `Please enter your message.` }]}
            name="query"
          >
            <TextArea
              placeholder="Your Message"
              rows={5}
            />
          </Form.Item>
  
          <Form.Item>
            <button className='logout'>
              Send
            </button>
          </Form.Item>
  
  
  
  
        </Form>
              </Col>
               

            </Row>

        

        
        </Col>

        </Row>
      
    </Layout>
  )
}

export default Contact