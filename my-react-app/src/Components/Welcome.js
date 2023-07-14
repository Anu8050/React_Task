import React from 'react';
import {useNavigate} from 'react-router-dom';
import {Button} from '@mui/material';

function Welcome() {
  const navigate = useNavigate();
  //This method is for checkin button it navigate to loginpage.
  const handleClick=()=>
  {
    navigate('loginpage')
  }
  const myStyle=
  {
    backgroundImage:
    "url('https://img.freepik.com/free-photo/wide-angle-shot-singletree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg')",
        height:'115vh',
        marginTop:'-70px',
        fontSize:'50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
  };
  return (
    <div style={myStyle} >
      <Button style={{backgroundColor:'green', color:'white'}} variant="contained" onClick={handleClick }> Checkin </Button>
    </div>
  );
}

export default Welcome;