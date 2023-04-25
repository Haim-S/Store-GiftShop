import React, {useRef} from 'react'
import "./login.css";
import {TextField, Button} from "@mui/material";
import {Alert} from '@mui/material';

const Login = ({setShowLogin}) => {

  const emailRef = useRef();
  const passwordRef = useRef();



  const handleSubmit = (e) => {
    e.preventDefault();
    const values = {email: emailRef.current.value,password:  passwordRef.current.value}
    console.log(values);
    emailRef.current.value = "";
    passwordRef.current.value = "";
  }
  

const error = "";
    
    
  return (
    <div className='LoginBox'>
        <h1 className='LoginTitle'>Login</h1>
        <form onSubmit={handleSubmit}>
        <div style={{ display: "flex", alignContent: "center", justifyContent: "center", flexDirection: "column"}}>
            <p>New here? <span className='sign-color' onClick={()=> setShowLogin(false)}>Sign Up</span></p>
            {error ? 
            <Alert severity="error">{error}</Alert>
          : " "  
          }
        <br/>
        <TextField inputRef={emailRef} name="email" type="text" variant='outlined' label='Email' required/>
        <br/>
        <TextField inputRef={passwordRef} name="password" type="text" variant='outlined' label='password' />
        </div>
        <div style={{ display: "flex", alignContent: "center", justifyContent: "center", marginTop: "35px"}}>
        <button className='Btnsign' type="submit" variant="contained">login</button>
        </div>
        </form>
    </div>
  )
}

export default Login