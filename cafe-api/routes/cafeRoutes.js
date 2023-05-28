const express = require('express');
const cafeController = require('../controllers/cafeController');

// Create a router instance
const router = express.Router();

// Define routes
router.get('/cafes', cafeController.getAllCafes);
router.post('/cafe', cafeController.createCafe);
router.put('/cafe/:id', cafeController.updateCafe);
router.delete('/cafe/:id', cafeController.deleteCafe);


// Export the router
module.exports = router;
