FROM node:14.17

WORKDIR /apps
# COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "nx-json", "./"]
# RUN npm install --production --silent && nv node_modules ../
COPY . /app

RUN npm install

EXPOSE 3333

# RUN npm install -g @angular/cli
# Run npm install -g @nrwl/cli

# RUN npx nx build --prod

CMD npx nx serve api