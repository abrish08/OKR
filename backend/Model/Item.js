
import { Timestamp } from 'mongodb';
import mongoose from 'mongoose';

const itemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  fileUrl: {
    type: String,
    required: true,
  },
  uploadAt: {
    type: Date,
    default: Date.now,
  },
  

 

});

export const Item= mongoose.model('Item', itemSchema);