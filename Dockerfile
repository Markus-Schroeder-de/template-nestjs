FROM node:20-bullseye
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "tsconfig.*", "nest-cli.json", "./"]
RUN npm i -g @nestjs/cli && npm install --production --silent 
# && mv node_modules ../
COPY . .
EXPOSE 8081
RUN chown -R node /usr/src/app
USER node
CMD ["npm", "start"]
