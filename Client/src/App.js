import {useEffect} from 'react';
import {Container, Grow, Grid} from '@mui/material';
import { useDispatch } from 'react-redux';

import Events from './Components/Events/events';
import Navbar from './Components/Navbar/navbar';
import Form from './Components/Form/form';
import { getEvents } from './Actions/events';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEvents());
  }, [dispatch]);

  return (
    <div>
      <Container maxwidth="lg">
        <Navbar/>  
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

      </Container>
    </div>
  );
}

export default App;
