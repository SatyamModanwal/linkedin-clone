const express = require('express');
const router = express.Router();

// Abhi ke liye placeholder — baad mein controller add karenge
router.get('/', (req, res) => {
  res.json({ message: 'User routes kaam kar rahe hain' });
});

module.exports = router;