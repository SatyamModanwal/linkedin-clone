const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true, //ye  field zarrori hai

    },

    email:{
        type:String,
        required:true,
        unique:true,
    },
      password: {
    type: String,
    required: true,
  },
  headline: {
    type: String,     // "Software Engineer at Google"
    default: '',
  },
  profilePicture: {
    type: String,     // Image URL
    default: '',
  },
  bio: {
    type: String,     // About section
    default: '',
  },
  connections: [{
    type: mongoose.Schema.Types.ObjectId, // Dusre users ki ID
    ref: 'User'       // User model se link
  }],
}, { timestamps: true }); // createdAt, updatedAt auto add hoga

module.exports = mongoose.model('User', userSchema);