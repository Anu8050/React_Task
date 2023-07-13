import React, { useState } from 'react';
import {Button, TextField, Card, CardContent, Snackbar, Alert} from '@mui/material';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginSuccess, setLoginSuccess] = useState(false);
    const [fieldError, setFieldError] = useState(false);
    const [snackbarOpen, setSnackbarOpen] = useState(false);

    const handleClick = () => {

        if (username.trim() === '' || password.trim() === '') 
        {
            setFieldError(true);
            setSnackbarOpen(true);
            return;
        }

        const user = database.find((user) => user.username === username && user.password === password);
        if (user) 
        {
            setLoginSuccess(true);
            setSnackbarOpen(true);
            resetfileds()
        } 
        else 
        {
            setLoginSuccess(false);
            setSnackbarOpen(true);
            // alert('Invalid username or password');
            resetfileds()
        }
    };

    const resetfileds = () =>
    {
        setUsername('')
        setPassword('')
    }

    const handleSnackbarClose = () => 
    {
        setSnackbarOpen(false);
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
            <Snackbar
                open={snackbarOpen}
                autoHideDuration={3000}
                onClose={handleSnackbarClose}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
                <Alert style={{background:'blue', color:'white'}} 
                severity={loginSuccess ? 'success' : 'error'}
                onClose={handleSnackbarClose}
                sx={{ width: '100%' }}>
                {loginSuccess ? 'Login Successful!' : 'Invalid username or password'}
                </Alert>
            </Snackbar>
            </CardContent>
        </Card>
        </div>

      
    );
  }
export default Login;