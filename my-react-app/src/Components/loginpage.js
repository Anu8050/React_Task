import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import {Button, TextField, Card, CardContent, IconButton, InputAdornment, createTheme, ThemeProvider, Dialog, CircularProgress, DialogContent} from '@mui/material';
import './text.css';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [fieldError, setFieldError] = useState(false);
    const [popupOpen, setPopupOpen] = useState(false);
    const [navigateTimer, setNavigateTimer] = useState(null);
    const [passwordLength, setPasswordLength] = useState(0);

    const navigate = useNavigate();
    //This method is for login button functionality.
    const handleClick = () => {
        //Check if username and password are empty it show error message.
        if (username.trim() === '' || password.trim() === '') 
        {
            setFieldError(true);
            return;
        }
        
        // const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[.$#@])[A-Za-z\d.#@]{8,}$/;
        
        // if (!passwordPattern.test(password)) 
        // {
        //     setFieldError(true);
        //     alert('Password must contain one capital latter, samall latter, number, special character');
        //     return;
        // }

        // Check if password contains at least one capital letter.
        if (!/[A-Z]/.test(password)) 
        {
            setFieldError(true);
            alert('Password must contain at least one capital letter');
            return;
        }

        // Check if password contains at least one number.
        if (!/\d/.test(password)) 
        {
            setFieldError(true);
            alert('Password must contain at least one number');
            return;
        }

        // Check if password contains at least one special character (.$&#@).
        if (!/[.$&#@]/.test(password)) 
        {
            setFieldError(true);
            alert('Password must contain at least one of the following special characters: .#@');
            return;
        }

        if (password.length < 8) 
        {
            setFieldError(true);
            alert('Password must be at least 8 characters long');
            return;
          }
        
        //Finding data fro
        const user = database.find(
          (user) => user.username === username && user.password === password
        );
        if (user) 
        {
            // setLoginSuccess(true);
            resetFields();
            openPopup();
        } 
        else 
        {
            // setLoginSuccess(false);
            alert('Invalid username or password');
            resetFields();
        }
    };
      
    //Resetinf fields.
    const resetFields = () =>
    {
        setUsername('');
        setPassword('');
        setPasswordLength(0);
        setFieldError(false);
    }

    //Open popup message for given time then it navigate to itempage.
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
   
    //Closeing popup after time out.
    const closePopup = () => 
    {
    setPopupOpen(false);
    clearTimeout(navigateTimer);
    };
     
    //this is for password Show when i click eye icon.
    const handleClickShowPassword = () => 
    {
        setShowPassword(!showPassword);
        setPasswordLength(0);
    };
    
    //For password visibality.
    const handleMouseDownPassword = (event) => 
    {
        event.preventDefault();
    };
    
    //Hard code username and password data here.
    const database = [
        {
            username: "anu",
            password: "Anu1234@"
        },
        {
            username: "anusha",
            password: "Aa123#"
        }];

    const theme = createTheme({
        palette: {
            primary: {
            main: '#008000'
            },
        },
        });

    return (
        <div style={{padding:'50px', marginTop:'-100px', background: 'url(https://img.freepik.com/free-photo/wide-angle-shot-singletree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg)', backgroundSize: 'cover', height: '120vh',alignItems: 'center', justifyContent: 'center', display: 'flex'}}>
            <Card className="card" style={{alignItems: 'center', maxWidth: 300, margin: '0 auto', marginTop: '100px',border:"3px solid green"}} >
            <CardContent>
            <ThemeProvider theme={theme}>
                <TextField fullWidth className="custom-outline" id="outlined-basic" label="Username" variant="outlined" value={username} 
                style={{ marginBottom: '20px' }}
                // InputLabelProps={{style: { color: 'green'},}}
                InputProps={{style: { borderColor: 'green' },  }}
                onChange={(e) => setUsername(e.target.value)} 
                error={fieldError && username.trim() === ''}
                helperText={fieldError && username.trim() === '' ? 'Please enter the username' : ''}
                />
                <TextField fullWidth className="custom-outline"  type="password" id="outlined-basic" label="Password" variant="outlined" value={password} 
                style={{ marginBottom: '20px' }}
                // InputLabelProps={{style: { color: 'green'},}}
                InputProps={{style: { borderColor: 'green' },
                maxLength:8,
                type: showPassword ? 'text' : 'password',
                endAdornment: (
                    <InputAdornment position="end">
                        <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword} 
                            onMouseDown={handleMouseDownPassword}>
                                {showPassword ? <Visibility />: <VisibilityOff />}
                        </IconButton>
                    </InputAdornment>
                ),}}
                onChange={(e) => {
                    const value = e.target.value;
                    setPassword(value);
                    setPasswordLength(value.length); 
                  }}
                  error={fieldError && password.trim() === ''}
                  helperText={fieldError && username.trim() === '' ? 'Please enter the username' : ''}
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