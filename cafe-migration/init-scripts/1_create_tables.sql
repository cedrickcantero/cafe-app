-- 1_create_tables.sql

-- Create the Cafe table
CREATE TABLE Cafe (
    id VARCHAR(36) PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description VARCHAR(255) ,
    logo VARCHAR(255),
    employees INT DEFAULT 1,
    location VARCHAR(100) 
);

-- Create the Employee table
CREATE TABLE Employee (
    id VARCHAR(10) PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email_address VARCHAR(100) ,
    phone_number VARCHAR(8) ,
    gender ENUM('Male', 'Female') ,
    days_worked INT DEFAULT 1,
    cafe_id VARCHAR(36),
    FOREIGN KEY (cafe_id) REFERENCES Cafe(id)
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
