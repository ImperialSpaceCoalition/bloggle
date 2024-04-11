// Dependencies
const router = require('express').Router();

// Dashboard route
router.get('/dashboard', async (req, res) => {
  try {
    // Render dashboard
    res.render('dashboard');
  } catch (err) {
    res.status(500).json(err);
  }
});

// Export router
module.exports = router;
