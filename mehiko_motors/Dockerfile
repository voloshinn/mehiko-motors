FROM node:20.14.0-alpine

WORKDIR /frontend

COPY ./package.json ./

RUN mkdir node_modules

RUN npm i --no-audit

COPY . .

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "5173"]