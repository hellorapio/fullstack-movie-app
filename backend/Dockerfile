FROM node:lts

WORKDIR /app

COPY package.json .

RUN npm install --legacy-peer-deps

COPY . .

RUN npm run migrate
RUN npm run generate

RUN npm run build

RUN npm run build

EXPOSE 3000

CMD ["npm", "run","start:prod"]