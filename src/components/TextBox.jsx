import React from 'react';
import TextField from '@mui/material/TextField';
import { blue } from '@mui/material/colors';

function Textbox(props) {
  return (
    <div>
        <TextField
          id="standard-search"
          label={props.label}
          variant="standard"
            sx={
                {
                    width:285,
                    color: blue,
                    margin: '7.5px'
                }
            }
            height={500}
        
        />
      
    </div>
  );
}

export default Textbox;