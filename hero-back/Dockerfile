
# Specify a base image
FROM node:12.13.0-alpine AS alpine

WORKDIR /app

# Install dependencies
COPY package.json .

RUN npm install


COPY . .

EXPOSE 3001

# Default command
CMD ["node", "app.js"]
## docker build -t firstimage .
## docker tag firstimage YOUR_DOCKERHUB_NAME/firstimage   THIS CREATES AN IMAGE WITH THE TAG
## docker push YOUR_DOCKERHUB_NAME/firstimage   THIS PUSHES THE IMAGE TO DOCKERHUB
## docker run -d -p 5000:5000 jakejasminjk/hero-backend THIS IS TO RUN IT LOCALLY ON PORT 5000
## https://stackoverflow.com/questions/41984399/denied-requested-access-to-the-resource-is-denied-docker#comment105441661_41984399