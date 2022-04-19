import React, {useEffect } from 'react';
import { Container, Grow, Grid } from '@mui/material';
import { useDispatch } from 'react-redux';

import { getEvents } from '../../Actions/events';
import Events from '../Events/events';
import Form from '../Form/form';

function Home() {

    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(getEvents());
    }, [dispatch]);

    return (
        <Grow in>
        <Container>
          <Grid container justify='space-between' alignItems='stretch' spacing={3}>

            <Grid item xs={12} sm={7}>
              <Events/>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Form/>
            </Grid>
          
          </Grid>
        </Container>
      </Grow>
  )
}

export default Home