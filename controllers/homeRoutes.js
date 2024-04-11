// Dependencies
const router = require('express').Router();

// Homepage route
router.get('/', async (req, res) => {
  try {
    // Render homepage
    res.render('home');
  } catch (err) {
    res.status(500).json(err);
  }
});

// Export router
module.exports = router;
