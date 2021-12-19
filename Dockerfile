FROM node:latest

WORKDIR /app
COPY package.json /app
COPY .sequelizerc /app
RUN npm install
COPY src /app/src