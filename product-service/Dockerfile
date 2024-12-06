FROM node:latest

WORKDIR /usr/src/products

COPY package*.json ./

RUN npm i

COPY . .

EXPOSE 3001

CMD [ "npm", "start" ]