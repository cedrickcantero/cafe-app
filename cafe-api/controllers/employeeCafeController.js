const EmployeeCafe = require ('../models/employeeCafeModel');

const employeeCafeController = {}

employeeCafeController.getAllEmployeesCafe = (req, res) => {
    const { cafe } = req.query;

    EmployeeCafe.getAllEmployeesCafe(cafe, (error, employees) => {
      if (error) {
        res.status(500).json({ error: 'Internal server error' });
        return;
      }
      res.status(200).json(employees);
    });
}

// Export the employee controller
module.exports = employeeCafeController;