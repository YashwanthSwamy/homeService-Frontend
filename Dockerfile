### STAGE 1: Build ###

FROM node:16 as builder

RUN mkdir /app
WORKDIR /app

COPY package*.json ./

RUN npm i

COPY . .

RUN npm run build:local

### STAGE 2: Final Image ###

FROM httpd:latest
WORKDIR /usr/local/apache2/htdocs/
COPY --from=builder /app/dist/frontend /usr/local/apache2/htdocs/