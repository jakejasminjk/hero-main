#Instructions to build and run
# docker build -t <nameImage> .
# docker run --name <containerName> -it --rm -v ${PWD}:/app -v /app/node_modules -p 3000:3000 -e CHOKIDAR_USEPOLLING=true <nameImage> 
# --name sets a container name (optional parameter)
# -it: starts container in interactive mode
# --rm: removes container and volumes after the container exits(optional parameter, remove this if you want to reuse container)
# -v mounts the code into the container at “/app” (this may not work on windows. If so remove this line on the run command)
# -v uses container version of nodes module folder instead of local
# -p maps container ports to local ports
# CHOKIDAR_USEPOLLING=true enables polling so hot reloads work

FROM node:12.13.0-alpine as build 
WORKDIR /app
COPY package*.json ./
RUN npm install 
COPY . .
RUN npm run build

FROM nginx 
EXPOSE 3000
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build /usr/share/nginx/html