const User= require('../models/User');
//APNA PROFILE DEKHO
//SOCHO - Linkedin pr apna profile update kiya hai h
const getMyProfile=async(req,res)=>{
    try{
        //req.user middleware se aata hai (authmiddleware yaad hai?)
        const user=await User.findById(req.user.id).select('-paasword');
        res.status(200).json(user);
    }catch(error){
        res.status(500).json({message:'Server error',error: error.message});
    }
    };

// ===== KISI AUR KA PROFILE DEKHO =====
// Socho — kisi ke naam pe click kiya LinkedIn pe
const getUserProfile = async (req, res) => {
  try {
    // URL se user ki ID aati hai — /api/users/profile/123abc
    const user = await User.findById(req.params.id).select('-password');

    if (!user) {
      return res.status(404).json({ message: 'User nahi mila' });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// ===== APNA PROFILE UPDATE KARO =====
// Socho — LinkedIn pe "Edit Profile" dabaya
const updateProfile = async (req, res) => {
  try {
    const { name, headline, bio } = req.body;

    // Sirf ye fields update hongi
    const updatedUser = await User.findByIdAndUpdate(
      req.user.id,
      { name, headline, bio },
      { new: true }  // updated user wapas bhejo
    ).select('-password');

    res.status(200).json({
      message: 'Profile update ho gaya!',
      user: updatedUser
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// ===== USER SEARCH KARO =====
// Socho — LinkedIn pe search bar mein koi naam dala
const searchUsers = async (req, res) => {
  try {
    // URL se search query aati hai — /api/users/search?name=rahul
    const { name } = req.query;

    // MongoDB mein search karo — case insensitive
    const users = await User.find({
      name: { $regex: name, $options: 'i' }
    }).select('-password');

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

module.exports = { getMyProfile, getUserProfile, updateProfile, searchUsers };
