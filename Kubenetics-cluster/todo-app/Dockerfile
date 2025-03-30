FROM node:20
WORKDIR /Kubenetics-cluster/todo-app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["node", "app.js"]
# File: file:///home/anand/Guidewire/Kubenetics-cluster/todo-app/app.js
