import React from 'react';
import Event from './Event/event';
import { Grid, CircularProgress} from "@mui/material";
import { useSelector } from 'react-redux';
import useStyles from './styles';



function Events() {
  
  const events = useSelector((state) => state.events);
  const classes = useStyles();

  return (
    !events.length ? <CircularProgress/> : (
      <Grid className={classes.mainContainer} container alignItems='stretch' spacing={3}>
        {events.map((event) => (
          <Grid key={event._id} item xs={12} sm={6}>
            <Event event={event} />
          </Grid>
        ))}
      </Grid>
    )
  );
}

export default Events