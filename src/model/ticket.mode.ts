import mongoose, { model } from "mongoose";

const ticketSchema = new mongoose.Schema({
  firstName: { type: String },
  lastName: { type: String },
  email: { type: String },
  mobile: { type: String, unique: true },

  ticket_type: { type: String,
enum: ["Sliver","Gold","Diamond"] },
  count: { type: Number },
  amount: { type: Number },
  gst: { type: Number },
  total:{type:Number}
});
const Ticket = model("ticket", ticketSchema);
export default Ticket;
