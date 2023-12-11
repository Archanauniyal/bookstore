import React from "react";
import "../Styles/Login.css";
import { Link, Routes } from "react-router-dom";
import pic1 from "../Images/library.jpg";
import pic2 from "../Images/library1.jpg";
import pic3 from "../Images/library2.jpg";
import pic4 from "../Images/library3.jpg";
// import pic5 from "../Images/library4.jpg";
import pic6 from "../Images/library5.jpg";
import pic7 from "../Images/library6.jpg";
import pic8 from "../Images/library7.jpeg";
import pic9 from "../Images/library8.jpeg";
import pic10 from "../Images/library9.jpeg";
import pic11 from "../Images/library10.jpg";
import pic12 from "../Images/library11.jpg";
import pic13 from "../Images/library12.jpg";


export default function Login() {
  
  return (
    <>
    
    <div className="loginmain">
      <div className="loginPage">
        <div className="librarayimages">
          <div className="library">
            <img src={pic1} alt="fghjk" />
          </div>
          <div className="library">
            <img src={pic2} alt="fghjk" />
          </div>
          <div className="library">
            <img src={pic3} alt="fghjk" />
          </div>
          <div className="library">
            <img src={pic4} alt="fghjk" />
          </div>
          <div className="library">
            <img src={pic6} alt="fghjk" />
          </div>
          <div className="library">
            <img src={pic13} alt="fghjk" />
          </div>
          <div className="library">
            <img src={pic12} alt="fghjk" />
          </div>
          <div className="library">
            <img src={pic9} alt="fghjk" />
          </div>
          <div className="library">
            <img src={pic10} alt="fghjk" />
          </div>
          <div className="library">
            <img src={pic11} alt="fghjk" />
          </div>
          <div className="library">
            <img src={pic8} alt="fghjk" />
          </div>
          <div className="library">
            <img src={pic7} alt="fghjk" />
          </div>
        </div>
      </div>
      <div className="loginleft">
        <div className="border">
          <input className="first" type="text" placeholder="First name" />
          <input className="last" type="text" placeholder="Last name" />
          <div className="login">
            <input className="email" type="text" placeholder="Email" />
            <input className="password" type="text" placeholder="Password"/>
          </div>
          <Link to="/home">
            <button  className="getstarted">GET STARTED</button>
          </Link>
          <div className="sinup">
          <p className="paragraph">OR</p>
            <h4>LOGIN</h4>
          </div>
          </div>
        </div>
        </div>
    </>
  );
}
