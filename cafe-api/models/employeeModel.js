const pool = require('../config/mysql');

const Employee = {};

// Function to fetch all employees from the database
Employee.getAllEmployees = async (cafe, callback) => {
  let query = 'SELECT Employee.id AS employee_id, name, email_address, phone_number, gender, ';
  query += 'days_worked AS days_worked, Employee.cafe_id ';
  query += 'FROM Employee LEFT JOIN EmployeeCafe ON Employee.id = EmployeeCafe.employee_id ';

  if (cafe) {
    query += `WHERE cafe = '${cafe}' `;
  }

  query += 'ORDER BY days_worked DESC';
  try {
    const [results,fields] = await pool.query(query);
    callback(null, results);
  } catch (error) {
    console.error('Error executing the query:', error);
    callback(error, null);
  }
};

// Function to create a new employee in the database
Employee.createEmployee = async (employeeData, callback) => {
  const { id, name, email_address, phone_number, gender, cafe_id, start_date } = employeeData;

  const query = 'INSERT INTO Employee (id, name, email_address, phone_number, gender, cafe_id) VALUES (?, ?, ?, ?, ?, ?)';
  const values = [id, name, email_address, phone_number, gender, cafe_id];

  try {
    await pool.execute(query, values);
    const newEmployee = { id, name, email_address, phone_number, gender, cafe_id };
    callback(null, newEmployee);
  } catch (error) {
    console.error('Error executing the query:', error);
    callback(error, null);
  }
};
// {
//   "id": "UI1000012",
//   "name": "Dom Johnson",
//   "email_address": "D.johnson@gmail.com",
//   "phone_number": "81234598",
//   "gender": "Male",
//   "cafe_id": "CI1000001"
// }


// Function to update the details of an employee in the database
Employee.updateEmployee = async (id, employeeData, callback) => {
  const { name, email_address, phone_number, gender, cafe_id } = employeeData;
  const employeeId = id.toString();

  const query = 'UPDATE Employee SET name = ?, email_address = ?, phone_number = ?, gender = ?, cafe_id = ? WHERE id = ?';
  const values = [name, email_address, phone_number, gender, cafe_id, employeeId];

  try {

    await pool.execute(query, values);
    const updatedEmployee = { id, name, email_address, phone_number, gender, cafe_id };
    callback(null, updatedEmployee);
  } catch (error) {
    console.error('Error executing the query:', error);
    callback(error, null);
  }
};

// {
//   "name": "Lebron Johnson",
//   "email_address": "l.johnson@gmail.com",
//   "phone_number": "81234598",
//   "gender": "Male",
//   "cafe_id": "CI1000009"
// }

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


// Function to delete an employee from the database based on cafe id
Employee.deleteByCafeId  = async (cafeId, callback) => {
  const query = 'DELETE FROM Employee WHERE cafe_id = ?';
  const values = [cafeId];
  console.log('cafeId',cafeId)

  try {
    await pool.execute(query, values);
    callback(null);
  } catch (error) {
    console.error('Error executing the query:', error);
    callback(error);
  }
};


// Export the Employee model
module.exports = Employee;
