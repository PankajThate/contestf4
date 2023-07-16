import React,{useState} from 'react'
import img from "./image.png"

const Formvalidation = () => {

  let [user, setUser] = useState({ name: "", email: "", password: "", confirmPassword: "" })
  let [error, setError] = useState("")
  let [success, setSuccess] = useState("")

  function validateform(event) {
    event.preventDefault()
   
     if (!user.email.includes("@") || !user.email.includes(".")) {
      
      return setError("Email should contain @ and .")
    }
    else if (user.password.length < 8 || user.password.length > 15) {
     
     return setError("password should contain  at least 8 letters")
    }
    else if (user.password !== user.confirmPassword) {
      
      return setError("Please make sure your password and confirm password match")
    }
    else
    {
      setSuccess("Account created successfully")
    }

 
   

  }

  return (
    
    <div className='main'>
      
          <div className='image'>
            <p>
          Find 3D Objects,Mockups 
           and illustrations here
            </p>
            <img src={img} alt="" />
        </div>

     
       <div className="inputdiv">
     <form onSubmit={validateform}>

      <div className="input">
      <input type="text" placeholder="Full Name"
          onChange={(event) => setUser({ ...user, name: event.target.value })}
        />
        <input type="email" placeholder="Email"
          onChange={(event) => setUser({ ...user, email: event.target.value })}
        />
        <input type="password" placeholder="Password"
          onChange={(event) => setUser({ ...user, password: event.target.value })}
        />
        <input type="password" placeholder="Confirm Password"
          onChange={(event) => setUser({ ...user, confirmPassword: event.target.value })}
        />
      </div>

        <div className="btn">
        <button type="Submit" >Create account</button>
        </div>

      </form>


     <div className="errors">
     {
        error && <p className='err'>Error: {error}</p>
      }
      {
        success && <p className='suss'>{success}</p>
      }
     </div>
     </div>




    </div>
  )
}

export default Formvalidation





