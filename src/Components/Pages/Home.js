import React,{Component} from "react";
import "../Styles/home.css"
import pic1 from "../Images/bookstore .jpg"
import Navbar  from "../Navbar/Navbar.js"
import pic2 from "../Images/college student.jpg"
import pic3 from "../Images/english book.jpg"
import pic4 from "../Images/history.jpeg"
import pic5 from "../Images/romance book.jpg"
import pic6 from "../Images/self help.jpg"
import pic7 from "../Images/story book.jpg"
import Footer from "../Footer/Footer.js";



export default function Home() {
  return (
  <>
  <Navbar/>
      <div className="bookstoremain">
        <div className="bookstore">
          <img src={pic1} />
        </div>
        <div>
          <h1>
            Get Your Own<br></br>
            New Book
            <br></br>Collection
          </h1>
          <div className="bookstorebutton">
            <button>LEARN MORE</button>
          </div>
        </div>
      </div>

      {/* cards */}
      <div className="cardsbook">
        <div className="bookname"> 
        <img src={pic2}/>
        <h5>College Student Book</h5>
        </div>
        <div className="bookname"> 
        <img src={pic3}/>
        <h5>English Book</h5>
        </div>
        <div className="bookname"> 
        <img src={pic4}/>
        <h5>History book</h5>
        </div>
        <div className="bookname"> 
        <img src={pic5}/>
        <h5>Romance Book</h5>
        </div>
        <div className="bookname"> 
        <img src={pic6}/>
        <h5>Self Help Book</h5>
        </div>
        <div className="bookname"> 
        <img src={pic7}/>
        <h5>Story Book</h5>
        </div>
      </div>
      <Footer/>
    </>
  );
}
