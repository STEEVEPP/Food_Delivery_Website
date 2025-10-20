# 1. Use the official Node.js image, matching your version
FROM node:20-slim

# 2. Set the working directory inside the container
WORKDIR /app

# 3. Copy package.json and package-lock.json for dependency caching
COPY package*.json ./

# 4. Install project dependencies
RUN npm install

# 5. Copy the rest of your application's source code
COPY . .

# 6. Expose the port your backend runs on
EXPOSE 4000

# 7. Define the command to start your server
#CMD [ "npm", "run", "server" ]
CMD [ "npm", "start" ]
