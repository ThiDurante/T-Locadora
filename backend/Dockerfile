FROM node:18
EXPOSE 3001
COPY package*.json ./
RUN npm install
COPY . .
ENTRYPOINT [ "npm", "run" ]
CMD [ "start:dev" ]
# CMD ["npm", "start"]