const pool = require('../config/mysql');

const EmployeeCafe = {};

// Function to create the employee-cafe relationship in the database
EmployeeCafe.getAllEmployeesCafe = async (cafe, callback) => {
  let query = 'SELECT id, employee_id, cafe_id, start_date FROM EmployeeCafe '


  try {
    const [results,fields] = await pool.query(query);
    callback(null, results);
  } catch (error) {
    console.error('Error executing the query:', error);
    callback(error, null);
  }
}

// Function to create the employee-cafe relationship in the database
EmployeeCafe.createEmployeeCafe = async (employeeCafeData, callback) => {
  const { employee_id, cafe_id, start_date } = employeeCafeData;

  const query = 'INSERT INTO EmployeeCafe (employee_id, cafe_id, start_date) VALUES (?, ?, ?)';
  const values = [employee_id, cafe_id, start_date];

  try {
    await pool.execute(query, values);
    callback(null);
  } catch (error) {
    console.error('Error executing the query:', error);
    callback(error);
  }
};

// Function to delete employees associated with a café from the database
EmployeeCafe.deleteEmployeesByCafe = async (cafeId, callback) => {
  const query = 'DELETE FROM Employee WHERE id IN (SELECT employee_id FROM EmployeeCafe WHERE cafe_id = ?)';
  const values = [cafeId];

  try {
    await pool.execute(query, values);
    callback(null);
  } catch (error) {
    console.error('Error executing the query:', error);
    callback(error);
  }
};

// Export the EmployeeCafe model
module.exports = EmployeeCafe;
