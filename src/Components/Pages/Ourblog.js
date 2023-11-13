import React from 'react'
import Navbar  from "../Navbar/Navbar.js"
import Footer from "../Footer/Footer.js";
import "../Styles/ourblog.css"
import pic1 from "../Images/blog1.jpg"
import pic2 from "../Images/blog2.jpg"
export default function Ourblog() {
  return (
    <>
    <Navbar/>
    <div className='blogmain'>
     <h4>ALL Your Favorite Books in Our Blog </h4>
     <h1>OUR BLOG</h1>
    </div>
    <div className='blog'>
    <div className='blogbook'>
      <img src={pic1}></img>
    </div>
    <div className='blogbook'>
      <img src={pic2}></img>
    </div>
    <div className='blogbook'>
      <img src={pic1}></img>
    </div>
    <div className='blogbook'>
      <img src={pic2}></img>
    </div>
    <div className='blogbook'>
      <img src={pic1}></img>
    </div>
    <div className='blogbook'>
      <img src={pic2}></img>
    </div>
    <div className='blogbook'>
      <img src={pic1}></img>
    </div>
    <div className='blogbook'>
      <img src={pic2}></img>
    </div>
    <div className='blogbook'>
      <img src={pic1}></img>
    </div>



    </div>
    <Footer/>
   
    </>
  )
}
