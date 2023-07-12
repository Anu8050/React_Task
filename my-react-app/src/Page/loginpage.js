import React, { useState } from 'react';
import {Button, TextField} from '@mui/material';
function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginSuccess, setLoginSuccess] = useState(false);
    const handleClick = () => {
        const user = database.find((user) => user.username === username && user.password === password);
        if (user) {
          setLoginSuccess(true);
          setUsername('')
          setPassword('')
        } else {
          setLoginSuccess(false);
          alert('Invalid username or password');
        }
        setUsername('')
        setPassword('')
    };
    
    const database = [
        {
            username: "anu",
            password: "1234"
        }];

    
    return (
        <div>
            <br/>
            <TextField id="outlined-basic" label="Username" variant="outlined" value={username} onChange={(e) => setUsername(e.target.value)} />
            <br />
            <br/>
            <TextField id="outlined-basic" label="Password" variant="outlined" value={password} onChange={(e) => setPassword(e.target.value)} />
            <br/>
            <br/>
            <Button variant="contained" onClick={handleClick }> Login </Button>
            {loginSuccess && <p>Login Successful!</p>}
        </div>

      
    );
  }
export default Login;