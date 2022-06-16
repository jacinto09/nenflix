import React,{useState, useEffect} from 'react'

export default function Modal() {
    function handleChange(e) {
    const value = e.target.value
    return value 
    }
  return (
    <div className='modal'>
        <form className='modal-content'>
         <input type="text" name="gmail" id="user-gmail" onChange={handleChange()} />
        </form>
    </div>
  )
}
