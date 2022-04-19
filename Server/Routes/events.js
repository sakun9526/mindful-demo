import express from 'express';
import {getEvents, createEvent} from '../Controllers/events.js'
import auth from '../Middleware/auth.js';

const router = express.Router();

//routes comes here
router.get('/', auth, getEvents);
router.post('/', auth, createEvent);

export default router;