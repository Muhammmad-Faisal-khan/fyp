/*
import React, { useState } from 'react'
import './LoginSignup.css'
import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'
//import Wel from '../Welcome/Welcome';
import {useNavigate} from 'react-router-dom';

const LoginSignup = () => {
const [action, setAction]= useState("Login");

const navigate=useNavigate();

const handleLogin = ()=>{
  navigate('/Welcome');
}

const [loginType, setLoginType] =useState('');
const handleLoginClick=(type)=>{
  setLoginType(type);
}
  return (


    <div>
     <div class="top-section">
       <nav class="top-menu">
    <ul>
      <li><a href=" "onClick={()=>handleLoginClick('student')} > 
      Student-login</a></li>
      <li><a href=" "onClick={() => handleLoginClick('chairperson')}>
        Chair-person login</a></li>
      <li><a href=" " onClick={() => handleLoginClick('admin')} 
      >Admin-login</a></li>
    </ul>
  </nav>
  </div>
     



    <div className='container'>
      
    <div className="header">
    <div className="text"> {action} {loginType} </div>
    <div className="underline"></div>

    </div> 
    <div className="inputs">
    {action==="Login" ? <div></div> :   
    
     <div className="input">
     <img src={user_icon} alt="" />
     <input type="text" placeholder='Name' />
   </div>
    }
     
      <div className="input">
        <img src={email_icon} alt="" />
        <input type="email" placeholder='Email id' />
      </div>

      <div className="input">
        <img src={password_icon} alt="" />
        <input type="password" placeholder='Password'  />
      </div>
    </div>
    {action==="Sign Up"?<div></div>:

<div className="forgot-password">Lost password? <span>Click here</span></div>
    }


    <div className="submit-container">

    <div className={`submit ${action === "Login" ? "gray" : ""}`} 
     onClick={() => setAction("Sign Up")}
    >Sign Up</div>
    <div className={`submit ${action === "Sign Up" ? "gray" : " "}`} onClick={handleLogin}>Login</div>
    </div>
    </div>
        </div>
  );
};
export default LoginSignup; 

*/