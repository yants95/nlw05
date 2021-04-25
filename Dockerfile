FROM node

WORKDIR /nlw05_chat/app

COPY package.json ./

RUN npm i --silent

COPY . .

EXPOSE 3333

CMD npm run dev