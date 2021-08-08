# base image
FROM node:11

# set working directory
# RUN mkdir /app
# WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH
ENV HOST 0.0.0.0

# install and cache app dependencies using yarn
ADD package.json package-lock.json ./
RUN npm install

# Copy all frontend stuff to new "app" folder
COPY . .
# RUN npm run build

CMD ["npm", "run", "serve"]
# CMD ["echo", "hi"]

EXPOSE 9000