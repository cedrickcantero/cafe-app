const pool = require('../config/mysql');

const Employee = {};

// Function to fetch all employees from the database
Employee.getAllEmployees = async (cafe, callback) => {
  let query = 'SELECT Employee.id AS employee_id, name, email_address, phone_number, ';
  query += 'DATEDIFF(CURDATE(), start_date) AS days_worked, cafe AS cafe ';
  query += 'FROM Employee LEFT JOIN EmployeeCafe ON Employee.id = EmployeeCafe.employee_id ';

  if (cafe) {
    query += `WHERE cafe = '${cafe}' `;
  }

  query += 'ORDER BY days_worked DESC';
  try {
    const results = await pool.query(query);
    callback(null, results);
  } catch (error) {
    console.error('Error executing the query:', error);
    callback(error, null);
  }
};
// Employee.getAllEmployees = (cafe, callback) => {
//   let query = 'SELECT id, name, email_address, phone_number, ';
//   query += 'DATEDIFF(CURDATE(), start_date) AS days_worked, cafe_name AS cafe ';
//   query += 'FROM Employee LEFT JOIN EmployeeCafe ON Employee.id = EmployeeCafe.employee_id ';

//   if (cafe) {
//     query += `WHERE cafe_name = '${cafe}' `;
//   }

//   query += 'ORDER BY days_worked DESC';

//   pool.query(query, (error, results) => {
//     if (error) {
//       callback(error, null);
//       return;
//     }
//     callback(null, results);
//   });
// };

// Function to create a new employee in the database
Employee.createEmployee = async (employeeData, callback) => {
  const { id, name, email_address, phone_number, gender } = employeeData;

  const query = 'INSERT INTO Employee (id, name, email_address, phone_number, gender) VALUES (?, ?, ?, ?, ?)';
  const values = [id, name, email_address, phone_number, gender];

  try {
    await pool.execute(query, values);
    const newEmployee = { id, name, email_address, phone_number, gender };
    callback(null, newEmployee);
  } catch (error) {
    console.error('Error executing the query:', error);
    callback(error, null);
  }
};

// Employee.createEmployee = (employeeData, callback) => {
//   const { id, name, email_address, phone_number, gender } = employeeData;

//   const query = 'INSERT INTO Employee (id, name, email_address, phone_number, gender) VALUES (?, ?, ?, ?, ?)';
//   const values = [id, name, email_address, phone_number, gender];

//   pool.query(query, values, (error, result) => {
//     if (error) {
//       callback(error, null);
//       return;
//     }
//     const newEmployee = { id, name, email_address, phone_number, gender };
//     callback(null, newEmployee);
//   });
// };

// Function to update the details of an employee in the database
Employee.updateEmployee = async (id, employeeData, callback) => {
  const { name, email_address, phone_number, gender } = employeeData;

  const query = 'UPDATE Employee SET name = ?, email_address = ?, phone_number = ?, gender = ? WHERE id = ?';
  const values = [name, email_address, phone_number, gender, id];

  try {
    await pool.execute(query, values);
    const updatedEmployee = { id, name, email_address, phone_number, gender };
    callback(null, updatedEmployee);
  } catch (error) {
    console.error('Error executing the query:', error);
    callback(error, null);
  }
};
// Employee.updateEmployee = (id, employeeData, callback) => {
//   const { name, email_address, phone_number, gender } = employeeData;

//   const query = 'UPDATE Employee SET name = ?, email_address = ?, phone_number = ?, gender = ? WHERE id = ?';
//   const values = [name, email_address, phone_number, gender, id];

//   pool.query(query, values, (error, result) => {
//     if (error) {
//       callback(error, null);
//       return;
//     }

//     const updatedEmployee = { id, name, email_address, phone_number, gender };
//     callback(null, updatedEmployee);
//   });
// };

// Function to update the employee's café relationship in the database
Employee.updateEmployeeCafe = async (employeeId, cafeId, startDate, callback) => {
  const query = 'UPDATE EmployeeCafe SET cafe_id = ?, start_date = ? WHERE employee_id = ?';
  const values = [cafeId, startDate, employeeId];

  try {
    await pool.execute(query, values);
    const updatedEmployeeCafe = { employee_id: employeeId, cafe_id: cafeId, start_date: startDate };
    callback(null, updatedEmployeeCafe);
  } catch (error) {
    console.error('Error executing the query:', error);
    callback(error, null);
  }
};
// Employee.updateEmployeeCafe = (employeeId, cafeId, startDate, callback) => {
//   const query = 'UPDATE EmployeeCafe SET cafe_id = ?, start_date = ? WHERE employee_id = ?';
//   const values = [cafeId, startDate, employeeId];

//   pool.query(query, values, (error, result) => {
//     if (error) {
//       callback(error, null);
//       return;
//     }

//     const updatedEmployeeCafe = { employee_id: employeeId, cafe_id: cafeId, start_date: startDate };
//     callback(null, updatedEmployeeCafe);
//   });
// };

// Function to delete an employee from the database
Employee.deleteEmployee = async (id, callback) => {
  const query = 'DELETE FROM Employee WHERE id = ?';
  const values = [id];

  try {
    await pool.execute(query, values);
    callback(null);
  } catch (error) {
    console.error('Error executing the query:', error);
    callback(error);
  }
};
// Employee.deleteEmployee = (id, callback) => {
//   const query = 'DELETE FROM Employee WHERE id = ?';
//   const values = [id];

//   pool.query(query, values, (error, result) => {
//     if (error) {
//       callback(error);
//       return;
//     }

//     callback(null);
//   });
// };

// Export the Employee model
module.exports = Employee;
