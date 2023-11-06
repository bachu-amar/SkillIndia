import Ticket from "@/model/ticket.mode";

export const booking = async (req, res) => {
  try {
    const {
      name,email,mobile,ticket_type,amount,count,gst} = req.body;
    const newTicket = new Ticket({
      name: name,
      email: email,
      mobile: mobile,
      ticket_type: ticket_type,
      count: count,
      amount: amount,
      gst: gst,
      total: (count * amount)+((count*amount)*gst) 
    });
    await newTicket.save();
    res.status(201).send(newTicket);
  } catch (error) {
    res.status(500).json("error");
  }
};


