FROM node:latest

WORKDIR /app

COPY package.json /app
COPY src /app/src

RUN npm install --production=true

CMD ["npm", "start"]