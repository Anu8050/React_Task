import React from 'react';
function Login() {
    const handleClick = () => {
        alert('button click catched');
        };
    return (
        <div>
            <p>Username: <input type="text" value="anu" /></p>
            <br/>
            <p>Password: <input type="text" value ="123"/></p>
            <br/>
            <button type="submit" onClick = {handleClick} >
              Login Here
            </button>
        </div>
      
    );
  }
export default Login;