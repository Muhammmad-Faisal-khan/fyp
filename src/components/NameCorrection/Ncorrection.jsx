import React from 'react'
import './Ncorrection.css'
import { useNavigate } from 'react-router-dom';

function Ncorrection() {
  const navigate =useNavigate();

  const GotoToken =()=>{
    navigate("/Token");
  }

  return (
    <>
    <div className="Ncorrection-container">
    <div className="yellow-line"></div>
    <div className="Ncorrection-message">Name Correction</div>
    <div className="yellow-line"></div>
  </div>

  <form>
<div className='M-container'>

    <div className='Ntext'>Fill form for name Correction</div>
      <div className='F-container'>

      {/* <div className='inputt'>
      <label>Old name:
        <input type="text" />
      </label>
      </div> */}

      <div className="inputt">
     <input type="text" placeholder='Old Name ' />
   </div>


   <div className="inputt">
     <input type="text" placeholder='New Name ' />
   </div>


   <div className="inputt">
     <input type="email" placeholder='Email ' />
   </div>


   <div className="inputt">
     <input type="text" placeholder='Faculty ' />
   </div>

   <div className="inputt">
     <input type="text" placeholder='Department ' />
   </div>

   <div className="inputt">
     <input type="text" placeholder='Semester ' />
   </div>

      </div>
      </div>
      
      <button className='btn' type='submit' onClick={GotoToken}>Submit</button>
    </form>
    </>
  )
}

export default Ncorrection;