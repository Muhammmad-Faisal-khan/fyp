// Signup.js
import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import { Link } from 'react-router-dom';


import './style.css';
function Signup() {

  const [namee, setNamee] = useState('');
  const [email, setEmail] = useState('');

  const [CMS, setCMS] = useState('');
  const [EmpID, setEmpID] = useState('');


  const [password, setPassword] = useState('');


  // const history = useHistory();

  // const handleSignup = () => {
  //   // Logic for handling signup
  //   // For simplicity, just redirecting to home page after signup
  //   history.push('/home');
  // };

const navigate=useNavigate();
const handleSignup = ()=>{
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
{/* <li>
              <Link to="#" onClick={() => handleLoginClick('student')}>
                Student-SignUp
              </Link>
            </li> */}
            <li>
              <Link to="#" onClick={() => handleLoginClick('chairperson')}>
                Chair-person SignUp
              </Link>
            </li>
            <li>
              <Link to="#" onClick={() => handleLoginClick('admin')}>
                Admin-SignUp
              </Link>
            </li>
 </ul>
</nav>
</div>



    <div className='container'>
      <h2 className='text'>SignUp {loginType}</h2>
      <div className='underline'> . </div>


      <form onSubmit={handleSignup}>
        <div>
           
        <input
            type="namee"
            placeholder='Full Name'
            value={namee}
            onChange={(e) => setNamee(e.target.value)}
            required
          />

        {loginType ==='student' && (
                    <input
                    type="CMS"
                    placeholder='CMS'
                    value={CMS}
                    onChange={(e) => setCMS(e.target.value)}
                    required
                  />
                  )} 


           {(loginType ==='chairperson' || loginType=== 'admin') && (
            <input
            type="EmpID"
            placeholder='Employement ID'
            value={EmpID}
            onChange={(e) => setEmpID(e.target.value)}
            required
          />
           )}
          
          <input
            type="email"
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />


        </div>
        <div>
        
          <input
            type="password"
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button className="btn" type="submit">Sign Up</button>
      </form>
      <p>Already have an account? <a href="/">Login</a></p>
    </div>
    </div>
  );
}
export default Signup;
