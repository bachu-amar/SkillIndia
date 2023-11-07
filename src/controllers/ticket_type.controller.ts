import Customer from "@/model/customer.model";
import Type from "@/model/ticket_type.model";

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

// export const booking = async (req, res) => {
//   try {
//     const {
//       name,email,mobile,ticket_type,amount,count,gst} = req.body;
//     const newTicket = new Ticket({
//       name: name,
//       email: email,
//       mobile: mobile,
//       ticket_type: ticket_type,
//       count: count,
//       amount: amount,
//       gst: gst,
//       total: (count * amount)+((count*amount)*gst) 
//     });
//     await newTicket.save();
//     res.status(201).send(newTicket);
//   } catch (error) {
//     res.status(500).json("error");
//   }
// };

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



// Retrieve user's bookings
export const getbookId = async (req, res) => {
  try {
    const userId = req.params.userId;
    const bookings = await Customer.find({ user: userId });
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve bookings." });
  }
};
