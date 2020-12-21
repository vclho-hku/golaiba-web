# docker build -t golaiba-web .
# docker run -dit -p 3000:3000 --name web-dev golaiba-web
FROM node:15.3.0-alpine

ENV PORT 3000

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Bundle app source
COPY . /usr/src/app

# Install app dependencies
COPY package*.json /usr/src/app/
RUN npm install

RUN npm run build
EXPOSE 3000

CMD [ "npm", "start" ]