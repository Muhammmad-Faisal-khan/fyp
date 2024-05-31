// Login.js
import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import { Link } from 'react-router-dom';

import './style.css'; // Import external CSS

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


const [loginType, setLoginType] =useState('');

const navigate=useNavigate();


const handleLoginClick=(type)=>{
  setLoginType(type);
}

  // const handleLogin = () => {
  //   // Logic for handling login
  //   // For simplicity, just redirecting to home page
  //   history.push('/home');
  // };


const handleLogin = ()=>{
  navigate('/Welcome');
}




  



return (

  <div>
     <div class="top-section">
       <nav class="top-menu">
    <ul>
    <li>
              <Link to="#" onClick={() => handleLoginClick('student')}>
                Student-login
              </Link>
            </li>
            <li>
              <Link to="#" onClick={() => handleLoginClick('chairperson')}>
                Chair-person login
              </Link>
            </li>
            <li>
              <Link to="#" onClick={() => handleLoginClick('admin')}>
                Admin-login
              </Link>
            </li>
    </ul>
  </nav>
  </div>



    <div className='container'>
      <h2 className='text'>Login {loginType}</h2>
      <div className='underline'> </div>

      <form onSubmit={handleLogin}>
        <div>
          <input
            type="email"
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)
            }
            required
          />
        </div>

        <div>
          <input
            type="password"
            placeholder='Password'
            value={password}
            onChange={(e) => 
              setPassword(e.target.value)
            }
            required
          />
          </div>
       
        <button className='btn' type="submit">Login</button>
      </form>
      <p>Don't have an account? 
        {/* <Link to="/signup">Sign up</Link> */}
        <a href="/signup">Sign up</a>
      </p>
    </div>
    </div>
  );
}


export default Login;
