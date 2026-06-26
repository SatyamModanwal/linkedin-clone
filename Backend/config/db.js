

// const mongoose = require('mongoose');

// const connectDB = async () => {
//   try {
//     // MongoDB se connection banao
//     await mongoose.connect(process.env.MONGO_URI);
//     console.log('MongoDB se jud gaye! ✅');
//   } catch (error) {
//     console.log('MongoDB error:', error.message);
//     process.exit(1); // Error aaya to server band karo
//   }
// };

// module.exports = connectDB;

const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 10000, // 10 second wait karo
    });
    console.log('MongoDB se jud gaye! ✅');
  } catch (error) {
    console.log('MongoDB error:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;