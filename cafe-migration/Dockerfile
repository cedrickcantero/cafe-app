# Dockerfile

# Use the official MySQL image as the base image
FROM mysql:latest

# Copy the SQL initialization scripts to the container
COPY ./init-scripts/ /docker-entrypoint-initdb.d/

# Set the environment variables for MySQL configuration
ENV MYSQL_ROOT_PASSWORD=password
ENV MYSQL_DATABASE=cafe_database
ENV MYSQL_USER=db_admin
ENV MYSQL_PASSWORD=db_password

# Expose port 3306 for MySQL connections
EXPOSE 3088
