import React from 'react'
import './Token.css';
import { useNavigate } from 'react-router-dom';


function Token() {
  const navigate =useNavigate();

  const handleSpan =()=>{
    navigate('/Cms_reset');

  }



  return (
<>
    <div className="token-container">
      <div className="yelloww-line"></div>
      <div className="token-message">Submitted</div>
      <div className="yelloww-line"></div>
      </div>

      <div className='TokenText'>
      Your token has been generated
    </div>



    <div className="centered-box-container">
      <div className="centered-box-content">
        <h3>Token number</h3>
        <h4>56</h4>
      </div>
      </div>
      <div className="Track">To Track your query go to <span onClick ={handleSpan}>Dashboard</span> </div>
      {/* <div className="Track">To track your query, go to <a href="/dashboard">Dashboard</a></div> */}

      </>
  )
}

export default Token



 

 


    



