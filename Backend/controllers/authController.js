// backend/controllers/authController.js

const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// ===== REGISTER =====
// Socho — naya user signup kar raha hai LinkedIn pe
const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // 1. Kya ye email pehle se hai?
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'Email pehle se registered hai' });
    }

    // 2. Password ko encrypt karo (locker mein rakho)
    // 10 = kitna strong encryption (salt rounds)
    const hashedPassword = await bcrypt.hash(password, 10);

    // 3. Naya user banao aur save karo
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    // 4. Token banao (room key card)
    const token = jwt.sign(
      { id: user._id },           // Token mein kya store karna hai
      process.env.JWT_SECRET,      // Secret taala
      { expiresIn: '7d' }         // 7 din baad expire hoga
    );

    // 5. Response bhejo
    res.status(201).json({
      message: 'Account ban gaya!',
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      }
    });

  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// ===== LOGIN =====
// Socho — purana user apna password daal ke login kar raha hai
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1. Email se user dhundo
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Email galat hai' });
    }

    // 2. Password check karo
    // bcrypt compare karega — encrypted vs jo user ne diya
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: 'Password galat hai' });
    }

    // 3. Token banao
    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );

    // 4. Response bhejo
    res.status(200).json({
      message: 'Login ho gaya!',
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      }
    });

  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

module.exports = { register, login };