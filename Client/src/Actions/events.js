import { FETCH_ALL, CREATE } from '../Constants/actionTypes';
import * as api from '../API/index';

export const getEvents = () => async(dispatch) => {
    try {
        const {data} = await api.fetchEvents();
        dispatch({
            type: FETCH_ALL,
            payload: data
        }) 
    } catch (error) {
        console.log(error);
        
    }
        
}


export const createEvent = (event) => async(dispatch)=> {
    try {
        const {data} = await api.createEvent(event);
        dispatch({type: CREATE, payload:data});
    } catch (error) {
        console.log(error);
        
    }
}