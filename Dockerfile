FROM node:fermium-alpine
WORKDIR /opt/webapptemplate
COPY build/ .
RUN npm i
EXPOSE 3000
CMD ["npm", "start"]

