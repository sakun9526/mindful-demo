import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';

//environment variables
import 'dotenv/config';

//import routes
import eventRoutes from './Routes/events.js';

const app = express();

// maximum request body size set to 30mb
app.use(bodyParser.json({limit:"30mb", extended: true}));
app.use(bodyParser.urlencoded({limit:"30mb", extended:true}));
app.use(cors());

//declare routes
app.use('/events', eventRoutes) //localhost:5000/events/

const PORT = process.env.PORT||5000;

mongoose.connect(process.env.CONNECTION_URL)
.then(() => app.listen(PORT, () => console.log(`Server is running on ${PORT}`)))
.catch((error) => console.log(error.message));