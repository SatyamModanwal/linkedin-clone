// const express = require('express');
// const router = express.Router();

// // Abhi ke liye placeholder — baad mein controller add karenge
// router.get('/', (req, res) => {
//   res.json({ message: 'User routes kaam kar rahe hain' });
// });

// module.exports = router;





const express = require('express');
const router = express.Router();
const {
  getMyProfile,
  getUserProfile,
  updateProfile,
  searchUsers
} = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');

// /api/users/me — apna profile dekho (login zaroori)
router.get('/me', protect, getMyProfile);

// /api/users/search?name=rahul — user dhundo
router.get('/search', protect, searchUsers);

// /api/users/profile/:id — kisi ka bhi profile dekho
router.get('/profile/:id', protect, getUserProfile);

// /api/users/update — apna profile update karo
router.put('/update', protect, updateProfile);

module.exports = router;