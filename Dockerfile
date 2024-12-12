FROM node:14

WORKDIR /employee-apirestfull
COPY package.json .
RUN npm install
COPY . .
CMD npm start


