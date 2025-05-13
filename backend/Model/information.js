import mongoose from "mongoose";
 const informationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
    phone: {
        type: String,
        required: true,
    },

    state:{
        type: String,
        required: true,
    },
    postalcode:{
        type: String,
        required: true,

    },
    country:
    {
        type: String,
        required: true,
    },
    website:{
        type: String,
        required: true,
    },

  uploadAt: {
    type: Date,
    default: Date.now,
  },
 
});
export const Information = mongoose.model("Information", informationSchema);