FROM node:boron

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY app/package.json .
COPY app/package-lock.json .

RUN npm install --silent

# Bundle app source
COPY ./app .

EXPOSE 3000
CMD [ "npm", "start" ]
