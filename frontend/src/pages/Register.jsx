import React from 'react'
import { useDispatch } from 'react-redux'
import Layout from '../components/Layout'
import axios from 'axios';
import { useEffect , useState} from 'react';
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'

const Register = () => {

  const navigate= useNavigate();
  const dispatch=useDispatch();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfrimPassword] = useState();

  const submitHandler= async (e)=>{
    e.preventDefault();
    dispatch({type: 'LOADING', payload: true});

    if(password!==confirmPassword){
      toast.error('Passwords doesn`t match!');
      return;
    }
        try {
             await axios.post('/api/users/register', {
              username,
              password
             });
            toast.success('Registration Successfull!');
          dispatch({type: 'LOADING', payload: false});
          navigate('/login');
        } catch (error) {
          console.log(error);
        toast.error('Error, Try again!');
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
         
      <div className="form-container">
        <div className="contactDiv">
          <form className='form'  onSubmit={submitHandler}  >
            <div className="form-grp">
              <h3 className='form-title' > Register </h3>
              <label htmlFor="username">Username</label>
              <input type="text" onChange={(e) => setUsername(e.target.value)}  id="username" className='input' required/>
            </div>
            <div className="form-grp">
            <label htmlFor="password">Password</label>
              <input type="password" onChange={(e) => setPassword(e.target.value)}  id="password" className='input' required />

            </div>
            <div className="form-grp">
            <label htmlFor="rpassword">Confirm Password</label>
              <input type="password" onChange={(e) => setConfrimPassword(e.target.value)}  id="rpassword" className='input' required />

            </div>
            <div className="form-grp">
              <button className='book-now' > Register</button>
            </div>
            <div className="form-grp">
              <p>Already have account?  <a href="/login" className='register-here' >Login</a>   </p>
            </div>
          </form>
        </div>

      </div>

    </Layout>
  )
}

export default Register