FROM node:20.14.0-alpine

WORKDIR /api

COPY ./package.json ./

RUN mkdir node_modules

RUN npm i --no-audit

COPY . .

CMD ["npm", "run", "dev"]