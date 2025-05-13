// import express from 'express';
// import bcrypt from 'bcrypt';
// import jwt from 'jsonwebtoken';
// import User from '../Models/userModel.js';


// export const loginUser = async (req, res) => {
// const { email, password } = req.body;

//   try {
//     // ✅ Check if user exists
//     const user = await User.find({ email });
//     if (!user) {
//       return res.status(401).json({ message: 'Invalid email or password' });
//     }
//     // ✅ Check password
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(401).json({ message: 'Invalid email or password' });
//     }
// // ✅ Generate JWT token


//     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
//       expiresIn: '1h',
//     });

//     res.status(200).json({
//       message: 'Login successful',
//       token,
//       user: {
//         id: user._id,
//         name: user.name,
//         email: user.email,
//         profilePic: user.profilePic,
//       },
//     });
//   } catch (err) {
//     console.error('Login Error:', err);
//     res.status(500).json({ message: 'Server error', error: err.message });
//   }



// }
