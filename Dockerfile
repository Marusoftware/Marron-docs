FROM node:18-slim AS build

WORKDIR /app/
COPY . .

RUN  yarn install --frozen-lockfile && yarn build

FROM httpd AS prod

COPY --from=build /app/dist/ /usr/local/apache2/htdocs/