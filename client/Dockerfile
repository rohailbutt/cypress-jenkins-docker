FROM node:14-alpine
WORKDIR /usr/app
COPY package*.json ./
RUN npm install
RUN npm install -g pm2
COPY . .
EXPOSE 3000
ENTRYPOINT ["npm","run"]