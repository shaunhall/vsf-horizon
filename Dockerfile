FROM node:14-alpine

WORKDIR /app
 
COPY packages ./packages
COPY scripts ./scripts
COPY package.json .
COPY tsconfig.json .
RUN	yarn install && yarn build

EXPOSE 3001

CMD yarn start:isr