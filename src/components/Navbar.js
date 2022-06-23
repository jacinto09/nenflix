import React from 'react'
import logo from '../assets/nenflix.png'
import { useState} from 'react'
import Modal from './Modal'
function Navbar() {
 const [openModal, setOpenModal] = useState(false)
 // necesito k al cerrar el modal no refreske la pag

  return (
    <>
    <nav className='nav'>
        <div className="nav-links">
            <div className="nav-img-container">
                <img src={logo} alt="logo" className='nav-img' />
            </div>
            <div className="nav-btn-container">
            <button className='nav-btn' onClick={()=>setOpenModal(!openModal)} >Info</button>
            </div>
        </div>
    </nav>
    {openModal
    ? <>
      <Modal /> 
      <button className='modal-btn' onClick={() =>setOpenModal(!openModal)}>X</button>
      </>
    : null}
    </>
  )
}

export default Navbar