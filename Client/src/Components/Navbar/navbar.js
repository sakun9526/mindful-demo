import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


function navbar() {

  return (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position='static'>
            <Typography variant="h4" component="div" sx={{ flexGrow: 1, pt: 2, pb: 2, pl:4}}>
                Upcoming Events
            </Typography>
        </AppBar>
    </Box>
  )
}

export default navbar