

const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

// .env file se secrets load karo
dotenv.config();

// Express app banao (restaurant kholo)
const app = express();

// MongoDB se connect karo (fridge on karo)
connectDB();

// Middleware — ye samjho security guard hai
// Jo bhi customer aaye, pehle yahan se guzre
app.use(cors());                         // Frontend ko allow karo
app.use(express.json());                 // JSON data samjho

// Routes — ye menu hai, kaunsa order kahan jayega
app.use('/api/auth', require('./routes/authRoutes'));   // Login/Register
app.use('/api/users', require('./routes/userRoutes')); // Profile
app.use('/api/posts', require('./routes/postRoutes')); // Posts

// Server start karo
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server chal raha hai port ${PORT} pe`);
});