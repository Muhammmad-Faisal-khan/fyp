//import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './Welcome.css';
//import CmsReset from '../Cms_reset/CmsReset';
//import Ncorrection from '../NameCorrection/Ncorrection';
 const Wel = () => {


  const navigate =useNavigate();
  const GotoCMS = () => {
    navigate('/Cms_reset');
    // Your CMS reset function logic here
    console.log("CMS reset selected");
  };

  const GotoNcorrection = () => {
    navigate('/NameCorrection');
    // Your Name Correction function logic here
    console.log("Name Correction selected");
  };


  // const GotoCMS =()=>{
  //   navigate('/Cms_reset');
  // }

  // const GotoNcorrection =()=>{
  //   navigate('/NameCorrection');
  // }


  const handleChange = (event) => {
    const value = event.target.value;
    if (value === "CmsReset") {
      GotoCMS();
    } else if (value === "Ncorrection") {
      GotoNcorrection();
    }
  };



  return (
  <>
  <div>
     <div className="welcome-container">
      <div className="yellow-line"></div>
      <div className="welcome-message">Welcome</div>
      <div className="yellow-line"></div>
    </div>


    <div className='Queries'>
      Please select your Queries
    </div>
    

    <select className="styled-select" onChange={handleChange}>
      <option value=""> Select an option</option>
      <option value="CmsReset" className="s1">CMS reset</option>
      <option value="Ncorrection" className="s2">Name Correction</option>
    </select>

    
    {/* <select className='s1' onClick={GotoCMS} >
      <option    value="CmsReset">CMS reset</option>
    </select>

    <select className='s2' onClick={GotoNcorrection} >
      <option value="Ncorrection"> Name Correction</option>
    </select> </div> */}



 {/* <button className='s1'  value="CmsReset" onClick={GotoCMS}>CMS reset</button>
  <button className='s2'  value="Ncorrection" onClick={GotoNcorrection}>Name Correction</button> */}
 </div>
</>
  )
}
export default Wel;
