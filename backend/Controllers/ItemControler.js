import { Item } from "../Model/Item.js";
export const uploadItemController = async (req, res) => {
  const { title} = req.body;
  const fileUrl = req.file.path; // Assuming you're using multer for file uploads
  try {
    const item = new Item({ title, fileUrl });
    await item.save();
    res.status(201).json({ message: "Item uploaded successfully", item });
  } catch (error) {
    res.status(500).json({ message: "Error uploading item", error });
  }
};
export const getItemController = async (req, res) => {
  const { id } = req.params;

  try {
    const item = await Item.findById(id);
    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }   
    res.status(200).json(item);

    } catch (error) {
    res.status(500).json({ message: "Error fetching item", error });
  }
}