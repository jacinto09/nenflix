import React from 'react'
import logo from '../assets/nenflix.png'
import { useState} from 'react'

function Navbar() {
 const [openModal, setOpenModal] = useState(false)
  return (
    <nav className='nav'>
        <div className="nav-links">
            <div className="nav-img-container">
                <img src={logo} alt="logo" className='nav-img' />
            </div>
            <div className="nav-btn-container">
            <button className='nav-btn' onClick={()=>setOpenModal(!openModal)} >Sign in</button>
            <button className='nav-btn' >Register</button>
            </div>
        </div>
    </nav>
  )
}

export default Navbar