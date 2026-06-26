
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const protect = async (req, res, next) => {
  try {
    // 1. Request ke header mein token dhundo
    // Frontend bhejta hai: "Bearer eyJhbGc..."
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
      return res.status(401).json({ message: 'Pehle login karo' });
    }

    // 2. Token verify karo (asli hai ya nakli?)
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // 3. Token se user ki ID nikalo aur user dhundo
    const user = await User.findById(decoded.id).select('-password');
    // select('-password') = password mat bhejo response mein

    if (!user) {
      return res.status(401).json({ message: 'User nahi mila' });
    }

    // 4. User ko request mein attach karo
    // Ab agle function ko pata hoga kaun hai ye
    req.user = user;

    // 5. Aage jane do
    next();

  } catch (error) {
    res.status(401).json({ message: 'Token invalid hai' });
  }
};

module.exports = { protect };