import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectDB } from './Config/db.js';
import userRoute from './Routes/userRoute.js';
import path from 'path';

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT ;

app.use(cors());
app.use(bodyParser.json());
app.use('/upload', express.static('Uploads')); // Serve uploaded images

app.use('/api', userRoute); // Register routes

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
