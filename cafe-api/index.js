const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

// Apply CORS middleware
app.use(cors());

// Middleware
app.use(bodyParser.json());

// Import routes
const cafeRoutes = require('./routes/cafeRoutes');
const employeeRoutes = require('./routes/employeeRoutes');
const employeeCafeRoutes = require('./routes/employeeCafeRoutes');

// Define routes
app.use('/cafes', cafeRoutes);
app.use('/employees', employeeRoutes);
app.use('/employeesCafe', employeeCafeRoutes);

// Start the server
const port = process.env.PORT || 3002;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
