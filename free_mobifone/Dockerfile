FROM node:12

WORKDIR /src/app

COPY package.json /src/app
COPY package-lock.json /src/app

RUN npm install

COPY . /src/app

EXPOSE 7000

CMD ["npm", "start"]