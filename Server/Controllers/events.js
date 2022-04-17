import EventsModel from '../Models/eventsModel.js';

export const getEvents = async (req,res) => {
    try {
      const events = await EventsModel.find();
      res.status(200).json(events);
    } catch (error) {
        res.sendstatus(404).json({message: error.message});
    }
} 


export const createEvent = async (req,res) => {
    const { title, numberOfSeats, selectedFile, price, date, time } = req.body;
    const newEvent = new EventsModel({ title, numberOfSeats, selectedFile, price, date, time })

    try {
        await newEvent.save();
        res.status(201).json(newEvent);

    } catch (error) {
        console.log(error);
    }
    
}

