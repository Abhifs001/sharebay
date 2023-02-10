import './App.css';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import DisplayEV from './pages/DisplayEV';

import Register from './pages/Register';
import Login from './pages/Login';
 import About from './pages/About';
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from 'react-toastify'
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Vehicle from './pages/Vehicle';
import HomePage from './pages/HomePage';
import RegisterEV from './pages/RegisterEV';
import MyBookings from './pages/MyBookings';


  function App() {
   
    return (
      <div className="app">
        <ToastContainer position='bottom-center' limit={1}/>
        <Router  >
          <Routes   >
            <Route path='/' element={<HomePage/>}    />          
              <Route path='/vehicles' element={<DisplayEV />}    />          
            <Route path='/login' element={<Login/>} />            
            <Route path='/register' element={<Register/>} />            
            <Route path='/vehicle/:vehicleId' element={ <Vehicle/>} />            
            <Route path='/about' element={<About/>} />            
            <Route path='/contact' element={<Contact/>} />            
            <Route path='/privacy' element={<Privacy/>} />    
            <Route path='/register-ev' element = {<RegisterEV/>} />        
            <Route path='/user-bookings' element = {<MyBookings />} />        
             

          </Routes>
        </Router>

      </div>
    );
  }

  
export default App;

 