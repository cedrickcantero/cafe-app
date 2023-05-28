const pool = require('../config/mysql');

const Cafe = {};

// Function to fetch all cafes from the database
Cafe.getAllCafes = async (location, callback) => {
  let query = 'SELECT name, description, COUNT(EmployeeCafe.employee_id) AS employees, logo, location, Cafe.id ';
  query += 'FROM Cafe LEFT JOIN EmployeeCafe ON Cafe.id = EmployeeCafe.cafe_id ';

  if (location) {
    query += `WHERE location = '${location}' `;
  }

  query += 'GROUP BY Cafe.id ORDER BY employees DESC';

  try {
    const [results, fields] = await pool.execute(query);
    console.log('Results:', results);
    callback(null, results);
  } catch (error) {
    console.error('Error executing the query:', error);
    callback(error, null);
  }
};

// Function to create a new café in the database
Cafe.createCafe = async (cafeData, callback) => {
  const { id, name, description, logo, location } = cafeData;
  const query = 'INSERT INTO Cafe (id, name, description, logo, location) VALUES (?, ?, ?, ?, ?)';
  const values = [id, name, description, logo, location];

  try {
    const [result] = await pool.execute(query, values);
    const newCafe = {
      id: result.insertId,
      name,
      description,
      logo,
      location
    };
    callback(null, newCafe);
  } catch (error) {
    console.error('Error executing the query:', error);
    callback(error, null);
  }
};

// {
//   "id": "CI1000003",
//   "name": "Starbucks",
//   "description": "A Starbucks cafe",
//   "logo": "cafe.jpg",
//   "location": "Cebu"
// }

// Function to update the details of a café in the database
Cafe.updateCafe = async (id, cafeData, callback) => {
  const { name, description, logo, location } = cafeData;

  const query = 'UPDATE Cafe SET name = ?, description = ?, logo = ?, location = ? WHERE id = ?';
  const values = [name, description, logo, location, id];

  try {
    await pool.execute(query, values);
    const updatedCafe = { id, name, description, logo, location };
    callback(null, updatedCafe);
  } catch (error) {
    console.error('Error executing the query:', error);
    callback(error, null);
  }
};

// {
//   "name": "Starbucks",
//   "description": "A Starbucks cafe",
//   "logo": "cafe.jpg",
//   "location": "Cebu"
// }

// Function to delete a café from the database
Cafe.deleteCafe = async (id, callback) => {
  const query = 'DELETE FROM Cafe WHERE id = ?';
  const values = [id];

  try {
    await pool.execute(query, values);
    callback(null);
  } catch (error) {
    console.error('Error executing the query:', error);
    callback(error);
  }
};

// Function to delete employees associated with a café from the database
Cafe.deleteEmployeesByCafe = async (cafeId, callback) => {
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


// Export the Cafe model
module.exports = Cafe;
