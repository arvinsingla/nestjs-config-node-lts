FROM node:12.16.1-alpine
WORKDIR /usr/src/app
ENV NODE_ENV production

COPY package*.json ./
RUN npm install
COPY dist ./dist

CMD [ "npm", "run", "start:prod" ]
