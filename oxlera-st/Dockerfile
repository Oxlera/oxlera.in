# Development image for Strapi (autoReload via `strapi develop`).
FROM node:22-bookworm-slim

# Toolchain for native modules (better-sqlite3 is still a dependency).
RUN apt-get update \
  && apt-get install -y --no-install-recommends python3 make g++ \
  && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

EXPOSE 1337

CMD ["npm", "run", "develop"]
