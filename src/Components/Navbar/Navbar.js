import React from 'react'
import "../Navbar/navbar.css"
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
   <>
   <div className='navbar'>
    <ul>
        <Link to="home">home</Link>
        <Link to="book">book</Link>
    </ul>

   </div>
   </>
  )
}
