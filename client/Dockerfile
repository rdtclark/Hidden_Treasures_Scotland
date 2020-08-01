# Step 1: Build the Vue application
# FROM node:12.4.0-alpine AS build
FROM node:latest AS build

# set the main  working directory
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH

COPY package*.json ./

RUN npm install
RUN npm install -g @vue/cli 

COPY . /app

# Arguments
# ARG VUE_APP_API_BASE_URL
# ENV VUE_APP_API_BASE_URL=${VUE_APP_API_BASE_URL}

# Build the app
RUN npm run build

# Step 2: Serve the app from Nginx
FROM nginx:1.17.0-alpine

# Copy the vue build from Step 1
# COPY --from=build /app/dist /var/www
COPY --from=build /app/dist /usr/share/nginx/html

# Copy the custom nginx config
# COPY nginx.conf /etc/nginx/nginx.conf

# Expose port to the Docker host
EXPOSE 80

ENTRYPOINT ["nginx","-g","daemon off;"]
