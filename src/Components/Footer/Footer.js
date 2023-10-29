import React from 'react'
import "../Footer/footer .css"
import {BsFacebook} from "react-icons/bs"
import {AiOutlineInstagram} from "react-icons/ai"
import {AiFillLinkedin} from "react-icons/ai"
import {AiFillTwitterSquare} from "react-icons/ai"
import {AiFillYoutube} from "react-icons/ai"

export default function Footer() {
  return (
 <>
 <div className='footer'>
 <div className='footermain'>
  <div className='aboutus'>
  <h3>Contact Us</h3>
    <ul>
        <li>Contact Us </li>
        <li>About Us</li>
        <li>Careers</li>
        <li>Bookchor Stories</li>
        <li>Press & News</li>
    </ul>
  </div>
  <div className='Quick help'>
    <h3>Quick Help</h3>
    <ul>
    <li>Help & Support </li>
    <li>Shipping Costs </li>
    <li>FAQ</li>
    <li>Blog</li>
    </ul>
  </div>
  <div className='comsumer'>
    <h3>Comsuer POlicy</h3>
    <ul>
    <li>Return POlicy</li>
    <li>Terms of Use</li>
    <li>Privacy</li>
    </ul>
  </div>
  <div className='Follow'>
    <h3>Follow Us</h3>
    <ul>
        <li>Instagaram</li>
        <li>Facebook</li>
        <li>Twitter</li>
        <li>YouTube</li>
        <li>Linkidin</li>
    </ul>
  </div>
  <div className='adress'>
    <h3>OUR SHOP ADDRESS</h3>
     <p>BooKworm"s Heaven <br></br>
     Municipal no :50 
     <br></br>The cmv hospital 
     <br></br> Near chwok of bmw
     <br></br>phone no:3241729638
     <br></br>E mail: archanauniyal@gmail.com
     </p>
  </div>
 </div>
 <div className='iconsfooter'>
    <div className='BsFacebook'> <BsFacebook/>
    <AiOutlineInstagram/>
    <AiFillLinkedin/>
    <AiFillTwitterSquare/>
    <AiFillYoutube/>
    </div>
 </div>
 </div>
 </>
  )
}
