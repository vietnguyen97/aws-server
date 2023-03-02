FROM node:lts-alpine AS deps

RUN apk add --no-cache libc6-compat

WORKDIR /api

COPY ./src ./src
COPY ./package.json ./package.json
COPY ./tsconfig.json ./tsconfig.json
COPY ./tsconfig.build.json ./tsconfig.build.json
COPY ./nest-cli.json ./nest-cli.json

RUN yarn
RUN yarn build

CMD [ "yarn", "start:prod" ]
EXPOSE 8080