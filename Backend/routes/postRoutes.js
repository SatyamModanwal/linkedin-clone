const express = require('express');
const router = express.Router();

// Abhi ke liye placeholder
router.get('/', (req, res) => {
  res.json({ message: 'Post routes kaam kar rahe hain' });
});

module.exports = router;