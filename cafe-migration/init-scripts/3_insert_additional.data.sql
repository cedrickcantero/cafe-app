-- 2_insert_data.sql

INSERT INTO Employee (id, name, email_address, phone_number, gender)
VALUES
  ('UI1000001', 'John Doe', 'johndoe@example.com', '91234567', 'Male'),
  ('UI1000002', 'Jane Smith', 'janesmith@example.com', '81234567', 'Female'),
  ('UI1000003', 'Lebron James', 'lebronjames@example.com', '81234568', 'Male'),
  ('UI1000004', 'Stephen Curry', 'stephencurry@example.com', '81234569', 'Male'),
  ('UI1000005', 'Kobe Bryant', 'kobebryant@example.com', '81234557', 'Male'),
  ('UI1000006', 'Chris Evans', 'chrisevans@example.com', '81234547', 'Male'),
  ('UI1000007', 'Tom Hardy', 'tomhhardy@example.com', '81234537', 'Male'),
  ('UI1000008', 'Tom Holland', 'tomholland@example.com', '81234527', 'Male'),
  ('UI1000009', 'Yona Carter', 'jamescarter@example.com', '81234517', 'Female'),
  ('UI1000010', 'Jeep Smith', 'marksmith@example.com', '81234507', 'Female');

-- Insert data into the Cafe table
INSERT INTO Cafe (id, name, description, location)
VALUES
  ('CI1000001','Cafe A', 'A cozy cafe with a wide selection of coffee and pastries', 'Panama'),
  ('CI1000002','Cafe B', 'A trendy cafe known for its specialty drinks and live music', 'Alberta'),
  ('CI1000003','Cafe C', 'A trendy cafe known for its specialty drinks and live music', 'Britaina'),
  ('CI1000004','Cafe D', 'A trendy cafe known for its specialty drinks and live music', 'Manila'),
  ('CI1000005','Cafe e', 'A trendy cafe known for its specialty drinks and live music', 'Cebu'),
  ('CI1000006','Cafe F', 'A trendy cafe known for its specialty drinks and live music', 'Davao'),
  ('CI1000007','Cafe G', 'A trendy cafe known for its specialty drinks and live music', 'Cagayan'),
  ('CI1000008','Cafe H', 'A trendy cafe known for its specialty drinks and live music', 'Paris'),
  ('CI1000009','Cafe I', 'A trendy cafe known for its specialty drinks and live music', 'Tokyo'),
  ('CI1000010','Cafe J', 'A trendy cafe known for its specialty drinks and live music', 'Rome');

-- Insert data into the EmployeeCafe table
INSERT INTO EmployeeCafe (employee_id, cafe_id, start_date)
VALUES
  ('UI1000001', 'CI1000001', '2023-05-01'), -- Example employee working in cafe 1
  ('UI1000002', 'CI1000002', '2023-05-01'), -- Example employee working in cafe 2
  ('UI1000003', 'CI1000003', '2023-05-01'),
  ('UI1000004', 'CI1000004', '2023-05-01'),
  ('UI1000005', 'CI1000005', '2023-05-01'),
  ('UI1000006', 'CI1000006', '2023-05-01'),
  ('UI1000007', 'CI1000007', '2023-05-01'),
  ('UI1000008', 'CI1000008', '2023-05-01'),
  ('UI1000009', 'CI1000009', '2023-05-01'),
  ('UI1000010', 'CI1000010', '2023-05-01');

