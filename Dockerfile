FROM node:erbium-slim
WORKDIR '/app'
COPY package.json .
RUN yarn install
COPY . .
CMD [ "npm", "start" ]