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
  const { id, name, email_address, phone_number, gender, cafe_id } = req.body;
  const start_date = new Date(); // Get the current date

  // Create the employee
  Employee.createEmployee({id, name, email_address, phone_number, gender, cafe_id, start_date }, (error, newEmployee) => {
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
  const { name, email_address, phone_number, gender, cafe_id } = req.body;
  const start_date = new Date(); 

  Employee.updateEmployee(id, { name, email_address, phone_number, gender, cafe_id }, (error, updatedEmployee) => {
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

// Controller function to delete an employee by cafe id
employeeController.deleteByCafeId  = (req, res) => {
  const { cafeId } = req.params;
  console.log("req.params", req.params)
  console.log("cafeId", cafeId)

  Employee.deleteByCafeId(cafeId, (error) => {
    if (error) {
      res.status(500).json({ error: 'Internal server error' });
      return;
    }

    res.status(200).json({ message: 'Employee deleted successfully by Cafe Id' });
  });
};

// Export the employee controller
module.exports = employeeController;
