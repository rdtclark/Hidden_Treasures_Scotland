# FROM node:12.2.0-alpine 
FROM node:latest

WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH

COPY package*.json ./

RUN npm install

COPY . .

CMD [ "npm", "start" ]
