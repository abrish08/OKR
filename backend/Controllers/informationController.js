import e from "express";
import { Information } from "../Model/information.js";

export const  createInformation= async (req, res) => {
    try {
      const { name, address, phone, state, postalcode, country, website } = req.body;
      const information = new Information({
        name,
        address,
        phone,  
        state,
        postalcode,
        country,
        website,
      });
      await information.save();
      res.status(201).json({ message: "Information created successfully", information });
    } catch (error) {
      res.status(500).json({ message: "Error creating information", error });
    }
  }





export const getInformationController = async (req, res) => {
  const { id } = req.params;

  try {
    const information = await Information.findById(id);
    if (!information) {
      return res.status(404).json({ message: "Information not found" });
    }       
    res.status(200).json(information);

    } catch (error) {
    res.status(500).json({ message: "Error fetching information", error });
    }   


}
export const getAllInformationController = async (req, res) => {
  try {
    const information = await Information.find();
    res.status(200).json(information);
  } catch (error) {
    res.status(500).json({ message: "Error fetching information", error });
  }
}