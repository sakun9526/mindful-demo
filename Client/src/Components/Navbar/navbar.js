import React from 'react';
import {AppBar, Box, Typography} from '@mui/material';

function Navbar() {

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

export default Navbar