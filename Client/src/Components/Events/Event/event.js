import React from 'react'
import useStyles from './styles';
import {Card, CardContent, CardMedia, Typography} from '@mui/material';
import {format} from 'date-fns';


function Event({event}) {
  
  const classes = useStyles();
  
  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={event.selectedFile} title={event.title}/>
      <Typography className={classes.title} gutterBottom variant="h5" component="h2">{event.title}</Typography>
      
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">{format(new Date(event.date),'dd.MM.yyyy')}</Typography>
        <Typography variant="body2" color="textSecondary" component="p">{format(new Date(event.time), 'HH:mm')}</Typography>
        <Typography variant="body2" color="textSecondary" component="p">{event.numberOfSeats} seats</Typography>
        <Typography variant="h4" color="textSecondary" component="p">{event.price}</Typography>
      </CardContent>
    </Card>
  )
}

export default Event