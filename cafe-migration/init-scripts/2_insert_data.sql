-- 2_insert_data.sql

INSERT INTO Employee (id, name, email_address, phone_number, gender)
VALUES
  ('UI1000001', 'John Doe', 'johndoe@example.com', '91234567', 'Male'),
  ('UI1000002', 'Jane Smith', 'janesmith@example.com', '81234567', 'Female');

-- Insert data into the Cafe table
INSERT INTO Cafe (id, name, description, location)
VALUES
  ('CI1000001','Cafe A', 'A cozy cafe with a wide selection of coffee and pastries', 'Panama'),
  ('CI1000002','Cafe B', 'A trendy cafe known for its specialty drinks and live music', 'Alberta');

-- Insert data into the EmployeeCafe table
INSERT INTO EmployeeCafe (employee_id, cafe_id, start_date)
VALUES
  ('UI1000001', 'CI1000001', '2023-05-01'),
  ('UI1000002', 'CI1000002', '2023-05-01');

