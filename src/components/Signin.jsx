import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Signin = () => {

  // define the two hooks for capturing/storing the users input
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // declare the three additional hooks
  const [loading, setLoading] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  // below we have the useNavigate hook to redirect us to another page on successful signin/login
  const navigate = useNavigate()

  // below is the function to handle the signin action
  const handlesubmit = async (e) =>{
    // prevent the site from reloading
    e.preventDefault()

      // update the loading hook with a message
      setLoading("This will take a moment please be patient.")

      try{
        // create a formdata object
        const formdata = new FormData()

        // insert the email and the password on the FormData created
        formdata.append("email", email);
        formdata.append("password", password)

        // Interact with axios for the response
        const response = await axios.post("https://hope.alwaysdata.net/api/signin", formdata)

        // set the loading hook back to default
        setLoading("");

        // check whether the user exists as part of your response from the API
        if(response.data.user){
          // if user is there, definatelythe details entered during signin are correct
          // setSuccess("Welcome back! Login successful.")

            localStorage.setItem("user", JSON.stringify(response.data.user));
          navigate("/");

          // if it is successful let a person get redirected to another page
        }
        else{
          // user is not found, credentials entered on the form are incorrect
          setError("Login failed, please try again")
        }
      }
      catch(error){
        // set loading back to default
        setLoading("")

        // update the error hook eith a message
        setError("Oops, something went wrong. Try again...")
      }
  }

  return (
    <div className='row justify-content-center mt-4'>
        <div className="col-md-6 card shadow p-4">
          <h1 className='text-primary'>Sign in</h1>

          <h5 className='text-info'>{loading}</h5>
          <h3 className="text-success">{success}</h3>
          <h4 className="text-danger">{error}</h4>

          <form onSubmit={handlesubmit}>
            <input type="email"
            placeholder='Enter email address'
            className='form-control'
            required 
            value={email}
            onChange={(e) => setEmail(e.target.value)}/> <br />

            {/* {email} */}

            <input type="password"
            placeholder='Enter password'
            className='form-control'
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)} /> <br />

            {/* {password} */}

            <input type="submit"
            value="Sign in"
            className='btn btn-primary' 
            required/>
          </form>
        </div>
    </div>
  )
}

export default Signin;


// how can you store the users details in to the local storage