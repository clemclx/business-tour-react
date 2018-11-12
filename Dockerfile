FROM node:slim

WORKDIR /usr/src/app

COPY . .

EXPOSE 8080
EXPOSE 8000