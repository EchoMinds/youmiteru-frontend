FROM node:20-alpine

WORKDIR /home/node/app

COPY package.json /home/node/app

RUN npm install --legacy-peer-deps

COPY . /home/node/app
