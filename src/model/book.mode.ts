import mongoose from "mongoose";

  // Define the Booking schema and model
  const bookingSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'eventTypes' },
    bookingId: String,
    event: String,
  });
  const Booking = mongoose.model('SkillBooking', bookingSchema);
  
  export default Booking;