import Customer from "@/model/customer.model";
import Booking from "@/model/book.mode";
const { v4: uuidv4 } = require("uuid");

import Type from "@/model/ticket_type.model";
import mongoose from "mongoose";
// import Ticket from "@/model/ticket.mode";
export const type = async (req, res) => {
  try {
    const { silver, glod, platinum } = req.body;
    const t_type = new Type({ silver, glod, platinum });
    await t_type.save();
    res.status(200).json(t_type);
  } catch (error) {
    res.status(500).json("Error");
  }
};

// export const register =  async (req, res) => {
//     try {
//       const { name,email,mobile,ticket_type,count } = req.body;

//     const gst = 0.18;

//     if(ticket_type === "silver"){
//         const amounts = Type.silver;
//         const total = (count * amounts)+((count*amounts)*gst)
//         const user = new Customer({
//             name:name,
//             email:email,
//             mobile:mobile,
//             ticket_type:ticket_type,
//             count:count,
//             amount:amounts,
//             gst:gst,
//             total:total
//         });
//         await user.save();
//         return res.status(200).json(user);
//     }
//     if(ticket_type === "gold"){
//         const amounts = Type.gold;
//         const total = (count * amounts)+((count*amounts)*gst)
//         const user = new Customer({
//             name:name,
//             email:email,
//             mobile:mobile,
//             ticket_type:ticket_type,
//             count:count,
//             amount:amounts,
//             gst:gst,
//             total:total
//         });
//         await user.save();
//         return res.status(200).json(user);
//     }
//     if(ticket_type === "platinum"){
//         const amounts = Type.platinum;
//         const total = (count * amounts)+((count*amounts)*gst)
//         const user = new Customer({
//             name:name,
//             email:email,
//             mobile:mobile,
//             ticket_type:ticket_type,
//             count:count,
//             amount:amounts,
//             gst:gst,
//             total:total
//         });
//         await user.save();
//         return res.status(200).json(user);
//     }

//     } catch (error) {
//       res.status(500).json({ error: 'Failed to register user.' });
//     }
//   };

// export const register = async (req, res) => {
//     try {
//       const { name, email, mobile, ticket_type, count } = req.body;

//       const gst = 0.18;
//       let amounts = 0;

//       if (ticket_type === "silver") {
//         amounts = Type.silver;
//       } else if (ticket_type === "gold") {
//         amounts = Type.gold;
//       } else if (ticket_type === "platinum") {
//         amounts = Type.platinum;
//       } else {
//         return res.status(400).json({ error: 'Invalid ticket type.' });
//       }
//       console.log(amounts)
//       const totals = (count * amounts) + ((count * amounts) * gst);
//       console.log(totals)

//       const user = await Customer.create({
//         name: name,
//         email: email,
//         mobile: mobile,
//         ticket_type: ticket_type,
//         count: count,
//         amount: amounts,
//         gst: gst,
//         total: totals,
//       });

//       return res.status(200).json(user);
//     } catch (error) {
//       console.error('Error:', error);
//       return res.status(500).json({ error: 'Failed to register user.' });
//     }
//   };

export const register = async (req, res) => {
  try {
    const { name, email, mobile, ticket_type, count } = req.body;

    const gst = 0.18;
    let amounts = 0;
    const abc = await Type.find({});
    const cde = abc[0];
    console.log(cde)
    console.log(cde.gold)
    if (ticket_type === "silver") {
      amounts = cde.silver;
    } else if (ticket_type === "gold") {
      amounts = cde.gold;
    } else if (ticket_type === "platinum") {
      amounts = cde.platinum;
    } else {
      return res.status(400).json({ error: "Invalid ticket type." });
    }

    const totals = count * amounts + count * amounts * gst;

    const user = await Customer.create({
      name: name,
      email: email,
      mobile: mobile,
      ticket_type: ticket_type,
      count: count,
      amount: amounts,
      gst: gst,
      total: totals,
    });
    return res.status(200).json(user);
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Failed to register user." });
  }
};



export const book = async (req, res) => {
  try {
    const { userId, event } = req.body;
    const bookingId = uuidv4();
    const booking = new Booking({ user: userId, bookingId, event });
    await booking.save();
    res.json(booking);
  } catch (error) {
    res.status(500).json({ error: "Failed to create a booking." });
  }
};

// Retrieve user's bookings
export const getbookId = async (req, res) => {
  try {
    const userId = req.params.userId;
    const bookings = await Booking.find({ user: userId });
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve bookings." });
  }
};
