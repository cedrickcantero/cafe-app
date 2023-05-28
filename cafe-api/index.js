const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Middleware
app.use(bodyParser.json());

// Import routes
const cafeRoutes = require('./routes/cafeRoutes');
const employeeRoutes = require('./routes/employeeRoutes');

// Define routes
app.use('/cafes', cafeRoutes);
app.use('/employees', employeeRoutes);

// Start the server
const port = process.env.PORT || 3002;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
