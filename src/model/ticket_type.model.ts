import mongoose from "mongoose";

interface Type {
  silver: number;
  gold: number;
  platinum: number;
}

const typesSchema = new mongoose.Schema({
    silver: Number,
    gold: Number,
    platinum:Number
  });

const Type = mongoose.model('eventTypes', typesSchema);
  
export default Type;
