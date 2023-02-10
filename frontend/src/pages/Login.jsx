import React from 'react'
import { useDispatch  } from 'react-redux';
import Layout from '../components/Layout'

import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useState } from 'react';
import axios from 'axios';
import 'D:\\ShareBay\\frontend\\src\\Styles\\login.css'


const Login = () => {

  //form handler 
const dispatch = useDispatch();
const navigate = useNavigate();

const [username, setUsername]= useState();
const [password, setPassword]=useState();
     
const submitHandler=  async(e)=>{
  e.preventDefault();
  dispatch({type: 'LOADING', payload: true});

  try {
    const {data}= await axios.post('/api/users/login', {
      username,
      password
    });
    localStorage.setItem('userInfo', JSON.stringify(data));
    toast.success("Login Successful");
    dispatch({type: 'LOADING', payload: false});
    navigate('/');

    
  } catch (error) {
    console.log(error);
    toast.error('Invalid password or username!');
    dispatch({type: 'LOADING', payload: false});
    
  }
}

useEffect(() => {
  if(localStorage.getItem("userInfo")) {
    localStorage.getItem("userInfo");
    navigate('/');
  }
})
  return (
    <Layout>
    < div  className='login-bg' >
      <div className="form-container"    >
        <div className="contactDiv">
          <form className='form'  onSubmit={submitHandler}    >
            <div className="form-grp">
              <h3 className='form-title' > Login </h3>
              <label htmlFor="username">Username</label>
              <input type="text" onChange={(e) => setUsername(e.target.value)} id="username" className='input' required />
            </div>
            <div className="form-grp">
            <label htmlFor="password">Password</label>
              <input type="password" onChange={(e) => setPassword(e.target.value)} id="password" className='input' required />

            </div>
            <div className="form-grp">
              <button className='book-now' > Login</button>
            </div>
            <div className="form-grp">
              <p>Don't have any account?  <a href="/register"  className='register-here' >Register Here</a>   </p>
            </div>
          </form>
        </div>

      </div>
    </div>
    </Layout>
     
  )
}

export default Login