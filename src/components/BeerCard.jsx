import * as React from 'react';
import { Stack } from '@mui/material';
import { Box } from '@mui/material';
import { Typography } from '@mui/material';


const BeerCard = (props) => {
  
  return (
   <Stack sx={{
    border:'2px grey solid',
    padding:'2rem',
    height:'600px',
    width:'400px'
   }}>
    <Box sx={{
      background:`url(${props.image_url})`,
      height:"500px",
      backgroundRepeat:'no-repeat',
      backgroundSize:'contain',
      backgroundPositionY:'center',
      backgroundPositionX:'center'
    }}>
    </Box>
    <Box sx={{
      marginTop:"1rem"
    }}>
       <Typography variant="h5">{props.name}</Typography>
    <h4>{props.tagline}</h4>
    </Box>
   
   </Stack>
  );
}

export {BeerCard}