-- 1_create_tables.sql

-- Create the Employee table
CREATE TABLE Employee (
    id VARCHAR(10) PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email_address VARCHAR(100) NOT NULL,
    phone_number VARCHAR(8) NOT NULL,
    gender ENUM('Male', 'Female') NOT NULL,
    days_worked INT DEFAULT 1,
    cafe_id INT,
    FOREIGN KEY (cafe_id) REFERENCES cafe(id)
);

-- Create the Cafe table
CREATE TABLE Cafe (
    id VARCHAR(36) PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description VARCHAR(255) NOT NULL,
    logo VARCHAR(255),
    employees INT DEFAULT 1,
    location VARCHAR(100) NOT NULL
);

-- Create the EmployeeCafe table with ON DELETE CASCADE
CREATE TABLE EmployeeCafe (
  id INT AUTO_INCREMENT PRIMARY KEY,
  employee_id VARCHAR(50) NOT NULL,
  cafe_id VARCHAR(36) NOT NULL,
  start_date DATE NOT NULL,
  UNIQUE KEY unique_employee (employee_id),
  FOREIGN KEY (employee_id) REFERENCES Employee(id) ON DELETE CASCADE,
  FOREIGN KEY (cafe_id) REFERENCES Cafe(id) ON DELETE CASCADE
);
