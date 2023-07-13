import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import {Button, TextField, Card, CardContent, Snackbar, Alert, IconButton, InputAdornment, createTheme, ThemeProvider, Dialog, CircularProgress, DialogTitle, DialogContent} from '@mui/material';
import './text.css';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginSuccess, setLoginSuccess] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [fieldError, setFieldError] = useState(false);
    const [popupOpen, setPopupOpen] = useState(false);
    const [navigateTimer, setNavigateTimer] = useState(null);

    const navigate = useNavigate();
    const handleClick = () => {

        if (username.trim() === '' || password.trim() === '') 
        {
            setFieldError(true);
            return;
        }

        const user = database.find((user) => user.username === username && user.password === password);
        if (user) 
        {
            setLoginSuccess(true);
            resetfileds()
            openPopup();
        } 
        else 
        {
            setLoginSuccess(false);
            // alert('Invalid username or password');
            resetfileds()
        }
    };

    const resetfileds = () =>
    {
        setUsername('')
        setPassword('')
    }

    const openPopup = () => 
    {
        setPopupOpen(true);
        const timer = setTimeout(() => {
          setPopupOpen(false);
          clearTimeout(timer);
          navigate('/itempage'); 
        }, 2000);
        setNavigateTimer(timer);
      };
      
    const closePopup = () => 
    {
    setPopupOpen(false);
    clearTimeout(navigateTimer);
    };

    const handleClickShowPassword = () => 
    {
        setShowPassword(!showPassword);
    };
    
    const handleMouseDownPassword = (event) => 
    {
        event.preventDefault();
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
                // InputLabelProps={{style: { color: 'green'},}}
                InputProps={{style: { borderColor: 'green' },}}
                onChange={(e) => setUsername(e.target.value)} 
                error={fieldError && username.trim() === ''}
                helperText={fieldError && username.trim() === '' ? 'Please enter the username' : ''}
                />
                <TextField className="custom-outline"  type="password" id="outlined-basic" label="Password" variant="outlined" value={password} 
                style={{ marginBottom: '20px' }}
                // InputLabelProps={{style: { color: 'green'},}}
                InputProps={{style: { borderColor: 'green' }, type: showPassword ? 'text' : 'password',endAdornment: (
                            <InputAdornment position="end">
                                <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword} 
                                    onMouseDown={handleMouseDownPassword}>
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        ),}}
                onChange={(e) => setPassword(e.target.value)} 
                error={fieldError && password.trim() === ''}
                helperText={fieldError && password.trim() === '' ? 'Please enter the password' : ''}
                />
            </ThemeProvider>
            <Button variant="contained" onClick={handleClick }> Login </Button>
            <Dialog open={popupOpen} onClose={closePopup}>
            <DialogContent>
                <CircularProgress />
            </DialogContent>
            </Dialog>
            
            </CardContent>
            </Card>
        </div>


      
    );
  }
export default Login;