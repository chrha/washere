# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory inside the container
WORKDIR /app

RUN mkdir -p /app/data

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application source code to the container
COPY . .

# Expose port 2000
EXPOSE 2000

# Start the Node.js application
CMD ["node", "data.js"]