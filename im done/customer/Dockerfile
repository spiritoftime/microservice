FROM node:18-alpine3.18 
WORKDIR /app/customer
COPY package.json .
RUN npm install
EXPOSE 8004
CMD ["npm", "start"]