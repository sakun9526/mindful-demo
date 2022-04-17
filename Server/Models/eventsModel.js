import mongoose from "mongoose";

const eventSchema = mongoose.Schema({
    title: String,
    date: Date,
    time: String,
    numberOfSeats: String,
    price: String,
    selectedFile: String,
})

const EventsModel = mongoose.model('EventsModel', eventSchema);

export default EventsModel;