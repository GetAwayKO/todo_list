FROM node:20-alpine as node
WORKDIR /app
COPY package*.json /app/
RUN npm ci
COPY ./client /app/client
COPY ./public /app/public
ADD .babelrc webpack.config.js /app/
EXPOSE 5000
RUN mkdir -p /app/public/build
CMD npm start