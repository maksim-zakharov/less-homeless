FROM node:alpine As development

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

# Накатим миграции если есть
#RUN npm run migration:run

# Сбилдим бек и фронт
RUN npm run build:ssr

FROM node:alpine as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=production

COPY . .

COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=development /usr/src/app/dist ./dist

EXPOSE $PORT


CMD ["node", "dist/server"]
