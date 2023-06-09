# Voting App

This repository contains the source code for the Voting application.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
## Prerequisites

Before you begin, ensure that you have the following prerequisites installed on your local machine:

- Node.js (version 17.9.1)
- NPM (version 8.11.0)

## Installation

1. Clone the repository to your local machine using the following command:

   ```shell
   git clone https://github.com/cedrickcantero/cafe-app.git

2. Navigate to the project directory:

   ```shell
   cd cafe-app
   
3. Run the docker compose yaml:

   ```shell
   docker-compose up -d --build

  If you are running the cafe-api using npm run start change the host setting in mysql.js and on windows machine or mac
      ![image](https://github.com/cedrickcantero/cafe-app/assets/32406846/cbca14e0-4df4-42f3-9160-e80c811f7204)

  If you are running the cafe-api using npm run start and on linux you can follow these steps:
  
      1. ifconfig
      2. ip addr show
      3. The IP address may appear as 192.168.x.x, 172.17.x.x, or something similar. Once located put it on the host settings
   *Note I haven't tested this yet as I don't have any linux machine
      


4. Once everrything is successful your docker container should look like this
![image](https://github.com/cedrickcantero/cafe-app/assets/32406846/01c2dfdc-f50c-4086-8fb7-5c3ebf9694bf)

5. Run the sql scripts to create the table and insert some data. They should be excuted one at time and in order. The scripts can be found here, and they are arranged in order. You can skip the 2nd script and go directly to the 3rd script
   ```shell
   cafe-migrations -> init-scripts
![image](https://github.com/cedrickcantero/cafe-app/assets/32406846/2641d8f5-ac9d-4eb0-8579-80900f1e5ab2)

6. Once you're done running the scripts. Go to http://localhost:3001 and it should look like this
![image](https://github.com/cedrickcantero/cafe-app/assets/32406846/a94e8503-c65f-42fd-bafa-70ab18cded12)

7. Cafe and Employee have the functionality to (Add, Edit, Delete). For the Cafe, you can filter by location using the input.

## Contributing
Contributions are welcome! If you find any issues or have suggestions for improvements, please feel free to create an issue or submit a pull request.

1. Fork the repository.
2. Create a new branch: git checkout -b feature-name
3. Make your changes and commit them: git commit -m 'Add some feature'
4. Push the branch to your forked repository: git push origin feature-name
5. Submit a pull request detailing your changes.
