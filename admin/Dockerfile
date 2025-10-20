### STAGE 1: Build the React Application ###
FROM node:22-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

### STAGE 2: Serve the build files with Nginx ###
FROM nginx:stable-alpine

# Copy the static files from the 'builder' stage
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Expose port 80 for Nginx
EXPOSE 80

# The default command for the nginx image is to start the server
CMD ["nginx", "-g", "daemon off;"]
