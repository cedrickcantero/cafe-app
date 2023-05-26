// Create the database
db = db.getSiblingDB('cafe-mongo');

// Create the employees collection
db.createCollection("employees");
db.employees.createIndex({ "cafe_id": 1 }, { unique: true });

// Create the cafes collection
db.createCollection("cafes");
