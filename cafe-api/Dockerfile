# Use the official Node.js 14 image as the base image
FROM node:14

# Set the working directory in the container
COPY . /usr/src/app

WORKDIR /usr/src/app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install the dependencies
RUN npm install
RUN npm install mysql2
RUN npm install -g nodemon
RUN npm install cors


# Copy the rest of the application code
# COPY . .

# Expose the port the app will listen on
EXPOSE 3002

# Start the Node.js application
CMD [ "nodemon", "server.js" ]

