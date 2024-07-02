# Use the official Node.js 20 image
FROM node:20

# Create app directory
WORKDIR /usr/src/app

# Copy application files
COPY server.js .

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD ["node", "server.js"]
