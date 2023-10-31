
FROM node:20

WORKDIR /pages

COPY package*.json ./

RUN yarn

COPY . .

RUN yarn build

EXPOSE 3000

CMD [ "yarn", "dev" ]
