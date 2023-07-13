import React, { useState } from 'react';
import {Box, Tabs, Tab} from '@mui/material';

function Itempage() {
    const [value, setValue] = useState(0);

    //This method is for setting tab value.
    const handleChange = (event, newValue) => 
    {
        setValue(newValue);
    };
    return (
      <div className='itempage'>
      <Tabs value={value} onChange={handleChange} aria-label="Item Tabs" >
        <Tab label="Item One" />
        <Tab label="Item Two" />
        <Tab label="Item Three" />
      </Tabs>
      <Box style={{ display: 'flex', alignItems: 'flex-start' }}>
        {value === 0 && <p>item one</p>}
        {value === 1 && <p>item two</p>}
        {value === 2 && <p>item three</p>}
      </Box>
      
      
      </div>
    );
  }
export default Itempage;