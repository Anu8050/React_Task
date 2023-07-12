import React, { useState } from 'react';
import {Button, TextField, Card, CardContent} from '@mui/material';
function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginSuccess, setLoginSuccess] = useState(false);
    const [fieldError, setFieldError] = useState(false);

    const handleClick = () => {

        if (username.trim() === '' || password.trim() === '') {
            setFieldError(true);
            return;
          }
      
          const user = database.find((user) => user.username === username && user.password === password);
          if (user) {
            setLoginSuccess(true);
            setUsername('');
            setPassword('');
          } else {
            setLoginSuccess(false);
            alert('Invalid username or password');
          }
    };
    
    const database = [
        {
            username: "anu",
            password: "1234"
        }];

    
    return (
        <div style={{marginTop:'-100px', background: 'url(https://img.freepik.com/free-photo/wide-angle-shot-singletree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg)', backgroundSize: 'cover', height: '120vh',alignItems: 'center', justifyContent: 'center', display: 'flex'}}>
        <Card style={{alignItems: 'center', maxWidth: 300, margin: '0 auto', marginTop: '100px' }}>
            <CardContent>
            <TextField id="outlined-basic" label="Username" variant="outlined" value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            error={fieldError && username.trim() === ''}
            helperText={fieldError && username.trim() === '' ? 'Please enter the username' : ''}
            />
            <br />
            <br/>
            <TextField id="outlined-basic" label="Password" variant="outlined" value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            error={fieldError && password.trim() === ''}
            helperText={fieldError && password.trim() === '' ? 'Please enter the password' : ''}
            />
            <br/>
            <br/>
            <Button variant="contained" onClick={handleClick }> Login </Button>
            {loginSuccess && <p>Login Successful!</p>}
            </CardContent>
        </Card>
        </div>

      
    );
  }
export default Login;