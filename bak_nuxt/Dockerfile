FROM node:22.3.0-slim as base

ENV NODE_ENV=production

WORKDIR /src

ENV NITRO_PORT=80

# get my bad boy yarn for building
RUN npm install yarn

FROM base as build
COPY . .
RUN yarn install --production=false
RUN yarn run build
FROM base

COPY --from=build /src/.output /src/.output

CMD [ "node", ".output/server/index.mjs" ]