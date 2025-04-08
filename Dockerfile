# Use the official Node.js 20 image as the base image
FROM node:20

# Set the working directory inside the container
WORKDIR /app

# Install pnpm globally
RUN npm install -g pnpm

# Copy package.json to the working directory
COPY package.json ./

# Install dependencies using pnpm
RUN pnpm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the TypeScript application
RUN pnpm run build

# Expose port 8000
EXPOSE 8000

# Command to run the application
CMD ["pnpm", "start"]