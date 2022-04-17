import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {TextField, Button, Typography, Paper} from '@mui/material'
import FileBase from 'react-file-base64';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers';

import useStyles from './styles';
import { createEvent } from '../../Actions/events';

function Form() {

  const classes = useStyles();
  const [eventData, setEventData] = useState({title: '', numberOfSeats:'', price:'', selectedFile:'', time: new Date(), date: new Date()});
  const dispatch = useDispatch();

  const handleSubmit = (e) =>{
    e.preventDefault();
    dispatch(createEvent(eventData));    
  }


  const clear = () => {
    console.log('clear btn clicked');
  }
  
  return (
    <Paper className={classes.paper}>
      <form autoComplete='off' noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant='h6'>Creating an Event</Typography>
        <TextField name='title' variant='outlined' label='Title' fullWidth value={eventData.title} onChange={(e)=> setEventData({...eventData, title: e.target.value})}/>

        <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker label="Date" clearable={true} value={eventData.date} onChange={(newDate)=> setEventData({...eventData, date: newDate})} renderInput={(params) => <TextField {...params}  fullWidth/>}/>        
        <TimePicker ampm={true} value={eventData.time.toLocaleString()} onChange={(newTime)=> setEventData({...eventData, time: newTime})} renderInput={(params) => <TextField {...params}  fullWidth/>}/>
        </LocalizationProvider>
        
        <TextField name='seats' variant='outlined' type='number' label='Seats' fullWidth value={eventData.numberOfSeats} onChange={(e)=> setEventData({...eventData, numberOfSeats: e.target.value})}/>
        <TextField name='price' variant='outlined' label='Price' fullWidth value={eventData.price} onChange={(e)=> setEventData({...eventData, price: e.target.value})}/>

        <div className={classes.fileInput}>
          <FileBase type="file" multiple={false} onDone={({base64}) => setEventData({...eventData, selectedFile: base64})}/>
        </div>

        <Button className={classes.buttonSubmit} color='primary' variant="contained" size='large' type='submit' fullWidth>Submit Event</Button>  
        <Button sx={{mt:1.5}} color='secondary' variant="outlined" size='small' onClick={clear} fullWidth>Clear</Button>  
      
      </form>

    </Paper>
  )
}

export default Form