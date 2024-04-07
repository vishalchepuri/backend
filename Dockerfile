# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install Node.js dependencies
RUN npm install

# Bundle your app source code inside the Docker image
COPY . .

# Expose the port your app runs on
EXPOSE 3000



# Define the command to run your app using CMD which defines the default command to run when the container starts
CMD ["npm", "start"]
