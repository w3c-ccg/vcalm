FROM node:14

WORKDIR /usr/src/app

COPY package.json package.json
COPY ./run.js ./run.js
COPY ./app.js ./app.js
COPY ./__fixtures__ ./__fixtures__
COPY ./services ./services
COPY ./routes ./routes
COPY ./suites ./suites

RUN npm install

EXPOSE 8080

CMD [ "node", "./run.js" ]