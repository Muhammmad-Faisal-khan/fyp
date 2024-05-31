import './App.css';
import React from 'react';
// import LoginSignup from './components/LoginSignup/LoginSignup';
import Token from './components/Token/Token';
 import CmsReset from './components/Cms_reset/CmsReset';
 import Wel from './components/Welcome/Welcome';
 import Ncorrection from './components/NameCorrection/Ncorrection';
import Login from './components/loginsign/login';

import Signup from './components/loginsign/Signnup';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
    {/* <LoginSignup />
       <Wel/>   */}
       {/* <Ncorrection />
      <CmsReset />
      <Token />  */}
      {/* <LoginSignup /> */}
      {/* <Ncorrection/> */}


 <Router>
<Routes>

    <Route  path="/Welcome" element={<Wel/>} />
   {/* <Route  path="/LoginSignup" element={<LoginSignup/>}/>  */}

  <Route path= "/Cms_reset" element={<CmsReset/>} />

  <Route path="/NameCorrection"  element={<Ncorrection/>}/>

  <Route path="/Token" element={<Token/>} />

       
          {/* <Route path="/loginsign" Component={Signup} />
          <Route path="/loginsign" Component={Login} /> */}
      {/* <Route path="/" element={<Login />} />  
      <Route path="/signnup" element={<Signup />} /> */}


<Route path="/" element={<Login />} />
<Route path="/signup" element={<Signup />} />

    
 
</Routes>
</Router> 
    </div>
  );
}

export default App;






