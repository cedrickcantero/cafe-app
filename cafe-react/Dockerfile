# Base image with Node.js pre-installed
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the app files to the container
COPY . ./

# Build the React app
RUN npm run build

# Expose the container's port
EXPOSE 3001

# Set the command to start the app
CMD ["npm", "start"]
