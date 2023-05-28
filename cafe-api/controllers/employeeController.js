const Employee = require('../models/employeeModel');
const EmployeeCafe = require('../models/employeeCafeModel');

const employeeController = {};

// Controller function to get all employees
employeeController.getAllEmployees = (req, res) => {
  const { cafe } = req.query;

  Employee.getAllEmployees(cafe, (error, employees) => {
    if (error) {
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
    res.status(200).json(employees);
  });
};

// Controller function to create a new employee
employeeController.createEmployee = (req, res) => {
  const { id, name, email_address, phone_number, gender, cafe_id, start_date } = req.body;

  // Create the employee
  Employee.createEmployee({ id, name, email_address, phone_number, gender }, (error, newEmployee) => {
    if (error) {
      res.status(500).json({ error: 'Internal server error' });
      return;
    }

    // Create the employee-cafe relationship
    EmployeeCafe.createEmployeeCafe({ employee_id: newEmployee.id, cafe_id, start_date }, (error) => {
      if (error) {
        res.status(500).json({ error: 'Internal server error' });
        return;
      }

      res.status(201).json(newEmployee);
    });
  });
};

// Controller function to update the details of an employee
employeeController.updateEmployee = (req, res) => {
  const { id } = req.params;
  const { name, email_address, phone_number, gender, cafe_id, start_date } = req.body;

  Employee.updateEmployee(id, { name, email_address, phone_number, gender }, (error, updatedEmployee) => {
    if (error) {
      res.status(500).json({ error: 'Internal server error' });
      return;
    }

    // Update the relationship with the café
    Employee.updateEmployeeCafe(id, cafe_id, start_date, (error, updatedEmployeeCafe) => {
      if (error) {
        res.status(500).json({ error: 'Internal server error' });
        return;
      }

      res.status(200).json(updatedEmployeeCafe);
    });
  });
};

// Controller function to delete an employee
employeeController.deleteEmployee = (req, res) => {
  const { id } = req.params;

  Employee.deleteEmployee(id, (error) => {
    if (error) {
      res.status(500).json({ error: 'Internal server error' });
      return;
    }

    res.status(200).json({ message: 'Employee deleted successfully' });
  });
};

// Export the employee controller
module.exports = employeeController;
