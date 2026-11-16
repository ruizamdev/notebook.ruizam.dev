# ---- Build ----
FROM node:22-alpine AS build
WORKDIR /app
RUN corepack enable # use pnpm@10.33.2 fijado en package.json
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile
COPY . .
RUN pnpm run build

# ---- Runtime ----
FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
