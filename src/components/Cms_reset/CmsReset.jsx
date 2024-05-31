import React from 'react';
import './CmsReset.css';
import { useNavigate } from 'react-router-dom';

function CmsReset() {
  
  const navigate =useNavigate();
  const GotoToken =()=>{
    navigate("/Token");

  }
  return (
    <>
     <div className="CmsReset-container">
    <div className="Y_line"></div>
    <div className="Cms-message">CMS Reset</div>
    <div className="Y_line"></div>
  </div>

  <form>
<div className='Main-container'>

    <div className='Rtext'>Fill the form to Reset your CMS </div>
      <div className='Form-container'>

      {/* <div className='inputtt'>
      <label>Full Name:
        <input type="text" />
      </label>
      </div> */}


      <div className="inputtt">
     <input type="text" placeholder='Full Name' />
   </div>

   <div className="inputtt">
     <input type="email" placeholder='Email' />
   </div>

   <div className="inputtt">
     <input type="email" placeholder='Faculty' />
   </div>

   <div className="inputtt">
     <input type="text" placeholder='Department'/>
   </div>

   <div className="inputtt">
     <input type="text" placeholder='Semester' />
   </div>

   <div className="inputtt">
     <input type="password" placeholder='Desire Password'/>
   </div>

      </div>
      </div>
      
      <button className='btncms' type='submit' onClick={GotoToken} >Submit</button>
    </form>


    </>
  )
}

export default CmsReset