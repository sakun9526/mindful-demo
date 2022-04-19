import React from 'react'
import useStyles from './styles';
import {Card, CardContent, CardMedia, Typography} from '@mui/material';
import {format} from 'date-fns';
import EventIcon from '@mui/icons-material/Event';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ChairAltIcon from '@mui/icons-material/ChairAlt';

function Event({event}) {
  
  const classes = useStyles();
  
  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={event.selectedFile} title={event.title}/>
      <Typography className={classes.title} gutterBottom variant="h5" component="h2">{event.title}</Typography>
      
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p"><EventIcon/> {format(new Date(event.date),'dd.MM.yyyy')}</Typography>
        <Typography variant="body2" color="textSecondary" component="p"><AccessTimeIcon/> {format(new Date(event.time), 'HH:mm')}</Typography>
        <Typography variant="body2" color="textSecondary" component="p"><ChairAltIcon/> {event.numberOfSeats} seats</Typography>
        <Typography variant="h5" color="textSecondary" component="p">LKR {event.price}</Typography>
      </CardContent>
    </Card>
  )
}

export default Event