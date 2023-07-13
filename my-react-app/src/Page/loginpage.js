import React, { useState } from 'react';
import {Button, TextField, Card, CardContent, Snackbar, Alert, createTheme, ThemeProvider} from '@mui/material';
import './text.css';

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

    const theme = createTheme({
        palette: {
            primary: {
            main: '#008000',
            },
        },
        });

    return (
        <div style={{padding:'50px', marginTop:'-100px', background: 'url(https://img.freepik.com/free-photo/wide-angle-shot-singletree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg)', backgroundSize: 'cover', height: '120vh',alignItems: 'center', justifyContent: 'center', display: 'flex'}}>
            <Card className="card" style={{alignItems: 'center', maxWidth: 300, margin: '0 auto', marginTop: '100px',border:"3px solid green"}} >
            <CardContent>
            <ThemeProvider theme={theme}>
                <TextField className="custom-outline" id="outlined-basic" label="Username" variant="outlined" value={username} 
                style={{ marginBottom: '20px' }}
                InputLabelProps={{style: { color: 'green'},}}
                InputProps={{style: { borderColor: 'green' },}}
                onChange={(e) => setUsername(e.target.value)} 
                error={fieldError && username.trim() === ''}
                helperText={fieldError && username.trim() === '' ? 'Please enter the username' : ''}
                />
                <TextField className="custom-outline"  id="outlined-basic" label="Password" variant="outlined" value={password} 
                style={{ marginBottom: '20px' }}
                InputLabelProps={{style: { color: 'green'},}}
                InputProps={{style: { borderColor: 'green' },}}
                onChange={(e) => setPassword(e.target.value)} 
                error={fieldError && password.trim() === ''}
                helperText={fieldError && password.trim() === '' ? 'Please enter the password' : ''}
                />
            </ThemeProvider>
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