import React from 'react'
import "../Navbar/navbar.css"
import { Link } from 'react-router-dom'
import pic1 from "../Images/bookstore logo..png"
import {AiOutlineSearch} from "react-icons/ai"

export default function Navbar() {
  return (
   <>
   {/* <div> */}
   <div className='navbartext'>
    <h5>BUY BESTSELLERS AT UNBELIEVABLE DISCOUNTS!  SHOP NOW</h5>
   </div>
   <div className='navbartop'>
   <div className='logo'><img src={pic1}/></div>
   <input className='searchbar' type='text' placeholder='searchbar'></input>
   <button className='searchbutton'>search</button>
    <div className='icon'> <AiOutlineSearch/></div>
   </div>
   <div className='navbar'>
    <ul>
      <Link to="/home" className='navbarli'>Home</Link>
      <Link to="/book" className='navbarli'>Book</Link>
      <Link to="/wholesale" className='navbarli'>Wholesale Book</Link>
      <Link to="/ourblog" className='navbarli'>Our Blog</Link>
      <Link to="/contactus" className='navbarli'>Contact US</Link>
    </ul>
    </div>
   {/* </div> */}
   </>
  )
}
