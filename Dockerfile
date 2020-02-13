FROM node:12.16-alpine3.11
WORKDIR /home/node
USER node
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
ENV PATH=$PATH:/home/node/.npm-global/bin
COPY package*.json ./
RUN npm install --production
COPY --chown=node:node . .
CMD ["npm", "start"]