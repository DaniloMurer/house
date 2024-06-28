# build stage
FROM node:22.3.0 as build-stage
RUN npm install -g yarn
WORKDIR /app
COPY . ./
RUN yarn install
RUN yarn run build

# production stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /app
EXPOSE 80
COPY nginx.conf /etc/nginx/nginx.conf
CMD ["nginx", "-g", "daemon off;"]