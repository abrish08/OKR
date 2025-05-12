import { User } from '../Model/UserModel.js';
import bcrypt from 'bcrypt';
export const registerUser = async (req, res) => {
  try {
    
    const { name, email, password } = req.body;
    const profilePic = req.file ? req.file.filename : null;
  

    if (!name || !email || !password || !profilePic) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // ✅ Check if email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already exists' });
    }
    const salt=10
    const hashedPassword= await bcrypt.hash(password,salt);
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      profilePic,
    });

    const savedUser = await newUser.save();

    res.status(201).json({
      message: 'User registered successfully',
      user: savedUser,
    });
  } catch (err) {
    console.error('Registration Error:', err);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

export const getUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json(user);
  } catch (err) {
    console.error('Get User Error:', err);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

export const getAllUsers = async (req, res) => {

  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    console.error('Get All Users Error:', err);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
}