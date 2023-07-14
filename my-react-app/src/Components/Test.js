import React, { useState, useEffect } from 'react';
import './Test.css';
import { Button, Stack, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

function Test() {
    const [name, setName] = useState('');
    const [nameMessage, setNameMessage] = useState('');

    const [email, setEmail] = useState('');
    const [emailMessage, setEmailMessage] = useState('');

    const [phoneno, setPhoneno] = useState('');
    const [phoneMessage, setPhoneMessage] = useState('');

    const [age, setAge] = useState('');
    const [ageMessage, setAgeMessage] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        console.log('Name:', name);
        console.log('Location:', location);

        if (location.state && location.state.data) {
            const { name, email, phoneno, age } = location.state.data;
            setName(name || '');
            setEmail(email || '');
            setPhoneno(phoneno || '');
            setAge(age || '');
        }
    }, [location.state]);




    const handleSave = () => {
        const newData = {
            name,
            email,
            phoneno,
            age,
        };
        dispatch({ type: 'ADD_DATA', payload: newData });
        const updateData = (newData) => {
            return {
                type: 'UPDATE_DATA',
                payload: newData,
            };
        };
        dispatch(updateData(newData));
        setName('');
        setNameMessage('');
        setEmail('');
        setEmailMessage('');
        setPhoneno('');
        setPhoneMessage('');
        setAge('');
        setAgeMessage('');
        navigate('/information');
    };

    const handleCancel = () => {
        setName('');
        setNameMessage('');
        setEmail('');
        setEmailMessage('');
        setPhoneno('');
        setPhoneMessage('');
        setAge('');
        setAgeMessage('');
    };


    const validateForm = () => {
        if (
            name.trim() !== '' &&
            email.trim() !== '' &&
            phoneno.trim() !== '' &&
            age.trim() !== '' &&
            nameMessage === '' &&
            emailMessage === '' &&
            phoneMessage === '' &&
            ageMessage === ''
        ) {
            return true;
        }
        return false;
    };

    const handleName = (e) => {
        const nameData = e.target.value;
        setName(nameData);
        if (!nameData) {
            setNameMessage('Required');
        } else {
            if (/^[a-zA-Z .]+$/.test(nameData)) {
                setName(nameData);
                setNameMessage('');
            } else {
                setNameMessage('Invalid Name');
            }
        }
    };

    const handleEmail = (e) => {
        const emailData = e.target.value;
        setEmail(emailData);
        if (!emailData) {
            setEmailMessage('Required');
        } else {
            if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(emailData)) {
                setEmail(emailData);
                setEmailMessage('');
            } else {
                setEmailMessage('Invalid Email');
            }
        }
    };

    const handlePhone = (e) => {
        const phoneData = e.target.value;
        setPhoneno(phoneData);
        if (!phoneData) {
            setPhoneMessage('Required');
        } else {
            let regex = new RegExp(/^\+91[1-9]\d{9}$/);
            if (regex.test(phoneData)) {
                setPhoneno(phoneData);
                setPhoneMessage('');
            } else {
                setPhoneMessage('Invalid Phone Number');
            }
        }
    };

    const handleAge = (e) => {
        const ageData = e.target.value;
        setAge(ageData);
        if (!ageData) {
            setAgeMessage('Required');
        } else {
            const ageValue = parseInt(ageData);
            if (ageValue >= 20 && ageValue <= 80) {
                setAge(ageData);
                setAgeMessage('');
            } else {
                setAgeMessage('Invalid Age');
            }
        }
    };

    return (
        <div className="background">
            <div className="container">
                <div className="box">
                    <form action="">
                        <h1> Testing </h1>
                        <Stack className="form-txtbx-container">
                            <TextField
                                required
                                id="name"
                                placeholder="Name"
                                value={name}
                                error={nameMessage}
                                className="input registration-screen-txtbx"
                                name="name"
                                inputProps={{ maxLength: 50 }}
                                onChange={(e) => {
                                    handleName(e);
                                    validateForm();
                                }}
                                onBlur={handleName}
                            />
                            {nameMessage && (
                                <span className="field-validation">{nameMessage}</span>
                            )}
                        </Stack>
                        <Stack className="form-txtbx-container">
                            <TextField
                                type="email"
                                required
                                id="email"
                                value={email}
                                placeholder="Email"
                                error={emailMessage}
                                className="input registration-screen-txtbx"
                                name="email"
                                onChange={(e) => {
                                    handleEmail(e);
                                    validateForm();
                                }}
                                onBlur={handleEmail}
                            />
                            {emailMessage && (
                                <span className="field-validation">{emailMessage}</span>
                            )}
                        </Stack>
                        <Stack className="form-txtbx-container">
                            <TextField
                                id="phoneno"
                                type="tel"
                                required
                                value={phoneno}
                                placeholder="PhoneNo"
                                error={phoneMessage}
                                className="input registration-screen-txtbx"
                                name="phoneno"
                                onChange={(e) => {
                                    handlePhone(e);
                                    validateForm();
                                }}
                                onBlur={handlePhone}
                            />
                            {phoneMessage && (
                                <span className="field-validation">{phoneMessage}</span>
                            )}
                        </Stack>
                        <Stack className="form-txtbx-container">
                            <TextField
                                id="age"
                                type="age"
                                required
                                value={age}
                                placeholder="Age"
                                error={ageMessage}
                                className="input registration-screen-txtbx"
                                name="age"
                                onChange={(e) => {
                                    handleAge(e);
                                    validateForm();
                                }}
                                onBlur={handleAge}
                            />
                            {ageMessage && (
                                <span className="field-validation">{ageMessage}</span>
                            )}
                        </Stack>
                        <div className="button-container">
                            <Button
                                variant="contained"
                                onClick={handleSave}
                                disabled={!validateForm()}
                            >
                                Save
                            </Button>
                            {' '}
                            <Button
                                variant="contained"
                                onClick={handleCancel}
                                disabled={!validateForm()}
                            >
                                Cancel
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Test;