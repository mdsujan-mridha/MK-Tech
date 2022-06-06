import React from 'react';
import { Link } from 'react-router-dom';
import { BsFacebook,BsInstagram,BsWhatsapp }  from "react-icons/bs"
import  { AiFillTwitterCircle } from "react-icons/ai"
  import './Footer.css';
const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                 <div className='row'>
                     <div className='col-12 col-md-12 col-lg-3 left-side'>
                       <h1 className='footer-about'>  About us </h1>
                     <p>  Being a music lover is like possessing an excellent mate that could help you in all of your Thick n thins..!!

Whether you are in your good or bad time , Music knows it all..!!! It could perfectly cherish you and make you go deep inside the emotions exploring a new world for you…!!!

At times it could amplify your Fun or could make you Emotional…!!

In short its EPIC FUN being a Music lover !!!

</p>
                     </div>
                     
                     <div className='col-12 col-md-12 col-lg-3 middle-side'>
                         <h1> Quick Link </h1>
                         <ul>
                         <Link to="home"> Home </Link>
                         <Link to="blogs"> Blogs </Link>
                         <Link to="login"> login </Link>
                         <Link to="register"> Register </Link>
                         </ul>
                      
                     </div>
                     <div className='col-12 col-md-12 col-lg-3 right-side'>
                          <h1> Follow us with </h1>
                        <ul>
                        <li>  <BsFacebook /> </li>
                          <li>  <AiFillTwitterCircle/> </li>
                          <li> < BsInstagram/> </li>
                          <li>  <BsWhatsapp/> </li>
                        </ul>
                     </div>
                     
                 </div>
                
            </div>
        </div>
    );
};

export default Footer;