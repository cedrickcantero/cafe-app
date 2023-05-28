const express = require('express');
const employeeCafeController = require('../controllers/employeeCafeController');

// Create a router instance
const router = express.Router();

// Define routes
router.get('/employeesCafes',  employeeCafeController.getAllEmployeesCafe);

// Export the router
module.exports = router;
