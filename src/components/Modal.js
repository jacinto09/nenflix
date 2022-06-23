import React,{useState} from 'react'

export default function Modal() {
   
  const [userGmail, setUserGmail] = useState('')
  const [userPassword, setUserPassword] = useState('')
  
    function handleChange(e) {
      if(e.target.id === 'user-gmail'){
          setUserGmail(e.target.value)
          console.log(userGmail)
      }
      if(e.target.id === 'user-password'){
          setUserPassword(e.target.value) 
          console.log(userPassword)
      }
     }

    function handleSubmit(e) {
       // funcion para enviar los datos a la base de datos
      
        if(userGmail === '' || userPassword ===''){
          e.preventDefault()
          alert('Please fill all the fields')
        }
        else
        console.log(userGmail, userPassword)
        setUserGmail('')
        setUserPassword('')
        
        
  

        
    }

  return (
    <div className='modal' >
      <div className='modal-content'>
        <h2>Check the availability of the movie you want in Netfix</h2>
      </div>
    </div>
  )
}
