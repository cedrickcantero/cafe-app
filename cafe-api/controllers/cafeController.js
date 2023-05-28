const Cafe = require('../models/cafeModel');
const Employee = require('../models/employeeModel');

const cafeController = {};

// Controller function to get all cafes
cafeController.getAllCafes = (req, res) => {
  const { location } = req.query; // Assuming you are passing the location as a query parameter

  Cafe.getAllCafes(location, (error, cafes) => {
    if (error) {
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
    res.status(200).json(cafes);
  });
};
// Controller function to create a new café
cafeController.createCafe = (req, res) => {
    const { id ,name, description, logo, location } = req.body;
  
    Cafe.createCafe({ id, name, description, logo, location }, (error, newCafe) => {
      if (error) {
        res.status(500).json({ error: 'Internal server error' });
        return;
      }
      res.status(201).json(newCafe);
    });
};

// Controller function to update the details of a café
cafeController.updateCafe = (req, res) => {
  const { id } = req.params;
  const { name, description, logo, location } = req.body;

  Cafe.updateCafe(id, { name, description, logo, location }, (error, updatedCafe) => {
    if (error) {
      res.status(500).json({ error: 'Internal server error' });
      return;
    }

    res.status(200).json(updatedCafe);
  });
};

// Controller function to delete a café and its associated employees
cafeController.deleteCafe = (req, res) => {
  const { id } = req.params;

  // Delete the café
  Cafe.deleteCafe(id, (error) => {
    if (error) {
      res.status(500).json({ error: 'Internal server error' });
      return;
    }

    // Delete the associated employees
    Cafe.deleteEmployeesByCafe(id, (error) => {
      if (error) {
        res.status(500).json({ error: 'Internal server error' });
        return;
      }

      res.status(200).json({ message: 'Café and associated employees deleted successfully' });
    });
  });
};

// Export the cafe controller
module.exports = cafeController;
