FROM node:latest

WORKDIR /usr/src/orders

COPY package*.json ./

RUN npm i

COPY . .

EXPOSE 3001

CMD [ "npm", "start" ]