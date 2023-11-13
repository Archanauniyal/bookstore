import React from 'react'
import Navbar  from "../Navbar/Navbar.js"
import Footer from "../Footer/Footer.js";
import "../Styles/Wholesale.css"
import pic1 from "../Images/wholesale1.jpg"
import pic2 from "../Images/wholesale2.jpg"
import pic3 from "../Images/wholesale3.jpg"
import pic4 from "../Images/wholesale4.jpeg"
import pic5 from "../Images/wholesale5.jpeg"
import pic6 from "../Images/wholesale6.jpeg"

// cards
import pic7 from "../Images/sale1.jpeg"
import pic8 from "../Images/sale2.jpeg"
import pic9 from "../Images/sale3.png"
import pic10 from "../Images/sale4.jpeg"
import pic11 from "../Images/sale5.jpeg"
import pic12 from "../Images/sale6.jpeg"
import pic13 from "../Images/sale7.jpeg"
import pic14 from "../Images/sale8.jpeg"
import pic15 from "../Images/sale9.jpeg"







export default function Wholesale() {
  return (
    <>
    <Navbar/>
    <section className="wholesale">
        <div className="container">
          <div className="row mt-5">
            <div className="col">
              <div className="card-container" id="demo">
                <div className="cardww" tabIndex="0">
                  <h2>Comedy books</h2>
                  <img
                    src={pic1}
                    width="100%"
                    alt="img"
                  />
                </div>
                <div className="cardww" tabIndex="0">
                  <h2> Adventure book</h2>
                  <img
                    src={pic2}
                    width="100%"
                  />
                </div>
                <div className="cardww" tabIndex="0">
                  <h2>Entertainment book</h2>
                  <img
                    src={pic3}
                    width="100%"
                  />
                </div>
                <div className="cardww" tabIndex="0">
                  <h2>Fashion book</h2>
                  <img
                    src={pic4}
                    width="100%"
                  />
                </div>
                <div className="cardww" tabIndex="0">
                  <h2>Story book</h2>
                  <img
                    src={pic5}
                    width="100%"
                  />
                </div>
                <div className="cardww" tabIndex="0">
                  <h2>Holly books</h2>
                  <img
                    src={pic6}
                    width="100%"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

<div className='wholesalecard'>
  <div className='salecard'>
    <img src={pic7}/>
    <h4></h4>
  </div>
  <div className='salecard'>
    <img src={pic8}/>
    <h4></h4>
  </div>
  <div className='salecard'>
    <img src={pic9}/>
    <h4></h4>
  </div>
  <div className='salecard'>
    <img src={pic10}/>
    <h4></h4>
  </div>
  <div className='salecard'>
    <img src={pic11}/>
    <h4></h4>
  </div>
  <div className='salecard'>
    <img src={pic12}/>
    <h4></h4>
  </div>
  <div className='salecard'>
    <img src={pic13}/>
    <h4></h4>
  </div>
  <div className='salecard'>
    <img src={pic14}/>
    <h4></h4>
  </div>
  <div className='salecard'>
    <img src={pic15}/>
    <h4></h4>
  </div>
</div>


    <Footer/>
   
    </>
  )
}
