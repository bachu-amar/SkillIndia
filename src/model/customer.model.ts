import mongoose from "mongoose";

const ticketSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String },
  mobile: { type: String, unique: true },
  ticket_type: { type: String },
  count: { type: Number },
  amount: { type: String },
  gst: { type: Number },
  total:{type:Number}
});
const Customer = mongoose.model("customer", ticketSchema);
export default Customer;
