# Use an official Node.js image from the Docker Hub
FROM node:alpine

# Set the working directory inside the Docker image
WORKDIR /app

# Copy package.json and package-lock.json (if available) to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application code to the working directory
COPY . .

# Build the Next.js application
RUN npm run build

# Expose port 3000 to the outside world
EXPOSE 3000

# Command to run the Next.js application
CMD ["npm", "run", "start"]
