const express = require('express');
const employeeController = require('../controllers/employeeController');

// Create a router instance
const router = express.Router();

// Define routes
router.get('/employees', employeeController.getAllEmployees);
router.post('/employee', employeeController.createEmployee);
router.put('/employee/:id', employeeController.updateEmployee);
router.delete('/employee/:id', employeeController.deleteEmployee);
router.delete('/employee/cafe/:cafeId', employeeController.deleteByCafeId);

// Export the router
module.exports = router;
