import React, { useEffect } from 'react';
import { Button, Stack, TextField, InputLabel } from '@mui/material';
import './Information.css';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Information() {
    const data = useSelector((state) => state.data);
    const navigate = useNavigate();

    const handleEdit = () => {
        navigate('/', { state: { data: data[0] } });
    };

    useEffect(() => {
        console.log('Data:', data);

    }, [data]);

    return (
        <div className="background">
            <div className="container">
                <div className="box">
                    <form action="">
                        <h1> Your Information </h1>
                        {data.length > 0 ? (
                            <>
                                <Stack className="form-txtbx-container">
                                    <InputLabel className='Input-label'>Name:
                                        <TextField
                                            id="name"
                                            value={data[0].name}
                                            placeholder="Name"
                                            className="input registration-screen-txtbx"
                                            name="name"
                                            disabled
                                        />
                                    </InputLabel>
                                </Stack>
                                <Stack className="form-txtbx-container">
                                    <InputLabel className='Input-label'>Email:
                                        <TextField
                                            type="email"
                                            id="email"
                                            value={data[0].email}
                                            placeholder="Email"
                                            className="input registration-screen-txtbx"
                                            name="email"
                                            disabled
                                        />
                                    </InputLabel>
                                </Stack>
                                <Stack className="form-txtbx-container">
                                    <InputLabel className='Input-label'>PhoneNo:
                                        <TextField
                                            id="phoneno"
                                            type="tel"
                                            value={data[0].phoneno}
                                            placeholder="PhoneNo"
                                            className="input registration-screen-txtbx"
                                            name="phoneno"
                                            disabled
                                        />
                                    </InputLabel>
                                </Stack>
                                <Stack className="form-txtbx-container">
                                    <InputLabel className='Input-label'>Age
                                        <TextField
                                            id="age"
                                            type="age"
                                            value={data[0].age}
                                            placeholder="Age"
                                            className="input registration-screen-txtbx"
                                            name="age"
                                            disabled
                                        />
                                    </InputLabel>
                                </Stack>
                                <div className="button-container">
                                    <Button variant="contained" onClick={handleEdit}>
                                        Edit
                                    </Button>
                                </div>
                            </>
                        ) : (
                            <p>No information available</p>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Information;
