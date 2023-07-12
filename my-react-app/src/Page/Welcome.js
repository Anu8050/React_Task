import React from 'react';
import {useNavigate} from 'react-router-dom';

function Welcome() {
  const navigate = useNavigate();
  const handleClick=()=>
  {
    navigate('loginpage')
  }
    return (
      <div>
        hi
        <br />
        <button type = "submit" onClick = {handleClick} >
              Login
        </button>
      </div>
    );
  }

export default Welcome;