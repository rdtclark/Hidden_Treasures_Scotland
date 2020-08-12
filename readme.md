<p align="center"><img src="readme/logo.png"></img></p>

# Hidden Treasures of Scotland
> The app to discover mini adventures near you. Are you ready to explore?

Puruse our growing secret book of unusual places to visit in and around Scotland. Hidden beaches, caves, walks and generally fun places for a mini adventure in your back yard.

This was a group project carried out during my time completing the CodeClan Professional Software Development Course.

## Live Version
http://hiddentreasuresofscotland.club/

Hosting Configuration:
- Digital Ocean VPS
- Ubuntu 18.04
- Docker with Docker Compose

## Technology Used

- Node.js and Express Backend API
- Vue front end
- Mongodb
- Leaflet Mapping library for Vue.js

## MVP

- A user can find places close to them based on their location, using the leaflet library map for Vue.js.
- Places have latitude and longitude, name, description, images & comments.
- Data is accessible via a JSON API, stored in MongoDB.
- Users can submit new places to the API

## Extensions

- Users can submit comments to each places

## Personal Extensions

Since graduating from CodeClan I decided to challenge myself to host this project.

I chose to use Docker to do this, there were some significant difficulties along the way and this is a short overview of how I solved them.

### docker-compose.yml

The most challenging aspect of this setup was seeding the Mongodb.

I tried and failed at least 5 different ways to approach this problem. In the end
settling on the solution of creating a temporary container  `db_seed`connected to the same
network as the `db` container. 

As you can see, this temporary container runs a simple command, mongoimport that takes
a JSON array of seeds contained in the `seed.json`.

This result should have been achievable during
building the `db` container, then passing an initialisation script to mongodb
however it did not seem to have the intended affect. Failing to create users or
seed the data.

e.g.
```yml
environment:
  - MONGO_INITDB_ROOT_USERNAME: root
  - MONGO_INITDB_ROOT_PASSWORD: example
  - MONGO_INITDB_DATABASE: admin
```

```yml
volumes:
  - ./db/data/seed.js:/docker-entrypoint-initdb.d/seed.js
```

The following is the final working solution.

```yml
version: "3.7"
services:
  backend:
    container_name: backend 
    build:
      context: backend
    depends_on:
      - db  
    volumes:
      - ./backend:/usr/app
      - /usr/app/node_modules
    environment:  
      - MONGO_URL=mongodb://db:27017
      - APP_PORT=8080
    ports: ['8080:8080']
    networks:
      - backend
      - frontend

  db:
    container_name: db
    image: mongo:4.2
    restart: always
    volumes:
      - db-data:/data/db
    ports:
      - 27017:27017
    networks:
      - backend

  db_seed:
    container_name: db_seed
    build: ./mongo
    networks:
      - backend
    depends_on:
      - db

  frontend:
    container_name: client
    build:
      context: client
    volumes:
      - ./client:/app
      - /app/node_modules
    ports:
      - '80:80'
    environment:  
      - BACKEND_URL=http://hiddentreasuresofscotland.com/api/treasures
    networks:
      - frontend

volumes:
  db-data:

networks:
  backend:
    name: backend
    driver: bridge
  frontend:
```

### Mongodb Seeding Dockerfile

```yml
FROM mongo:4.2
COPY seed.json /seed.json
CMD mongoimport --host db --db hidden_treasures --collection treasures --drop --file /seed.json --jsonArray
```

### Node / Express Backend Dockerfile

```yml
# FROM node:12.2.0-alpine 
FROM node:latest

WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH

COPY package*.json ./

RUN npm install

COPY . .

CMD [ "npm", "start" ]
```

### Vue.js Frontend Dockerfile

```yml
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
```
