FROM node:20-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm install --production

COPY . .

RUN npm run build

# ----------------------------- Production image ----------------------------- #
FROM node:20-alpine
WORKDIR /app

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package*.json ./
RUN npm install --production

CMD ["node", "dist/index.js"]