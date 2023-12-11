import React from "react";
import Navbar from "../Navbar/Navbar.js";
import Footer from "../Footer/Footer.js";
import "../Styles/contact.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Contactus() {
  const toastify = () => toast("submit successful");
  return (
    <>
      <Navbar />
      <div className="contactusmain">
        <div className="contact">
          <h2>Contact Us</h2>
          <h3>BookWorm's Heaven</h3>
          <p>
            BooKworm"s Heaven <br></br>
            Municipal no :50
            <br></br>The cmv hospital
            <br></br> Near chwok of bmw
            <br></br>phone no:3241729638
            <br></br>E mail: archanauniyal@gmail.com
          </p>
          <h2>Our Business Hours:</h2>
          <p>
            Call Center - 8949270689 - 11 AM to 5 PM (Mon to Sat)<br></br>
            Chat - 11 AM to 8 PM (Mon to Sat) What's App Only<br></br>
            Email - 11 AM to 8 PM (Mon to Sat)
          </p>
          <h2>Have questions?</h2>
          <p>
            For questions, you can reach out or call our team at 8949270689.
            <br></br>
            Happy shipping!Team Boookart online book store
          </p>
        </div>
        <div className="contactform">
          <h2>Get in Touch</h2>
          <div className="input">
            <div>
              <input className="text" type="text" placeholder="Mr" />
            </div>
            <div>
              <input className="text" type="text" placeholder=" first Name" />
            </div>
            <div>
              <input className="text" type="text" placeholder="last Name" />
            </div>
          </div>
          <div>
            <input className="text" type="text" placeholder="Company Name" />
          </div>
          <div>
            <input className="text" type="text" placeholder="Street Name" />
          </div>
          <div className="postal code">
            <input className="text" type="text" placeholder="Postal code" />
            <input className="text" type="text" placeholder="city" />
          </div>
          <div>
            <input className="text" type="text" placeholder="country" />
          </div>
          <div className="postal code">
            <input className="text" type="text" placeholder="E Mail Adress" />
            <input
              className="text"
              type="text"
              placeholder="Telephone Number"
            />
          </div>
          <div className="message">
            <input className="text" type="text" placeholder="Message" />
          </div>
          <button onClick={toastify} className="submit">
            Submit
          </button>
        </div>
      </div>
      <div>
        {/* <ToastContainer> */}
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          type="success"
        />
      </div>
      <Footer />
    </>
  );
}
