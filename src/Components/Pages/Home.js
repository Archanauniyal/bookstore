import React from "react";
import "../Styles/home.css"
import pic1 from "../Images/bookstore .jpg"

export default function Home() {
  return (
    <>
    
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
    </>
  );
}
