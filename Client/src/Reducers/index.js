import { combineReducers } from "redux";
import events from './events';
import auth from './auth';

export default combineReducers({
    events:events,
    auth: auth,
});