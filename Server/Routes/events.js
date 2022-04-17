import express from 'express';
import {getEvents, createEvent} from '../Controllers/events.js'

const router = express.Router();

//routes comes here
router.get('/', getEvents);
router.post('/', createEvent);

export default router;