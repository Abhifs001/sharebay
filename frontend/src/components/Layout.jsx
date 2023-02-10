import React, { useState } from 'react'
import { toast } from 'react-toastify';
import pic from "../components/LogoOfficial.JPG"
import { useNavigate } from 'react-router-dom';
import { Button, Dropdown, Space } from 'antd';
import { MdAccountCircle } from 'react-icons/md'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiFillFacebook,  AiFillTwitterCircle,AiFillLinkedin, AiOutlineInstagram} from 'react-icons/ai'
 
const Layout = (props) => {
    const [showIcons, setshowIcons]= useState(false)

    const items = [
        {
            key: '1',
            label: (
                <a href="/">
                    Home
                </a>
            ),
        },
        {
            key: '2',
            label: (
                <a href="/user-bookings">
                    My Bookings
                </a>
            ),
        },
         
       
        
    ];
    const userInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem("userInfo")) : null;

    const navigate = useNavigate();


    const logoutHandler = () => {

        localStorage.removeItem('userInfo');
        window.location.reload();
        toast.success("Log out Successfull")
        navigate('/');

    }


    return (
        <>

            <div className='header'>
                <div className='col'  >
                    <a href="/" className='logo'   >  <img src={pic} alt="" /> </a>

                </div>
               
                    <div className={showIcons ? "mobile-menu" : "col"} >

              
                    <a href="/" className='logout'  >Home</a>
                    <a href="/vehicles" className='logout'  >Book EVs  </a>
                    <a href="/register-ev" className='logout'  >Register Your EV for Rent  </a>
                    <a href="/about" className='logout'  >About</a>
                    <a href="/contact" className='logout'  >Contact</a>
                    <a href="/privacy" className='logout '  >Privacy Policy</a>

                </div>
                <div className='hamburger-menu'  >
                                    <a href="#" onClick={()=>{setshowIcons(!showIcons)}}  > < GiHamburgerMenu/></a>
                </div>
               
                <div className='account-details'>
               
              

                    <span className="name">   </span>
                    {
                        userInfo ? (
                                      
                            <span >
                               
                                <Dropdown  
                                    menu={{
                                        items,
                                    }}
                                    placement="bottomLeft" arrow={{
                                        pointAtCenter: true,
                                      }}

                                >
                                    <Button   className='accountbu' >   < MdAccountCircle    size={20} />   {userInfo?.username}</Button>
                                </Dropdown>
                                    
                                <span>
                                    <button onClick={logoutHandler} className='logout'>Logout</button>
                                </span>

                            </span>


                        ) : (
                            <a href="/login" className='logout'  >Login</a>
                        )
                    }

                </div>
               
               


            </div>
            <div className='main' >
                {props.children}
            </div>

            <div className='footer'>
                 <div className="footer-social">
                    <ul className='footer-social-ul'>
                       <li><a href="https://www.facebook.com"  className='footer-social-icons'  >  <AiFillFacebook size={40}  /> </a></li>
                            
                       <li>  <a href="https://www.twitter.com"  className='footer-social-icons'  >  <AiFillTwitterCircle size={40}  /> </a></li>
                       <li>  <a href="https://www.linkedin.com"  className='footer-social-icons'  >  <AiFillLinkedin size={40}  /> </a></li>
                       <li>    <a href="https://www.instagram.com"  className='footer-social-icons'  >  <AiOutlineInstagram size={40}  /> </a></li>
                    </ul>
                 </div>
              <p   >&copy;2022 ShareBay All rights Reserved</p>
 
               

                
            </div>
         

        </>
    )
}

export default Layout