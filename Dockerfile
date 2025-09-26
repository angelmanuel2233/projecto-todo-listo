# Etapa 1: Build con Node.js
FROM node:20-alpine AS builder
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY tsconfig.json ./
COPY src/ ./src

RUN npm run build

RUN mkdir -p dist && cp src/index.html dist/index.html && cp src/style.css dist/style.css

# Etapa 2: Servir con Nginx
FROM nginx:1.25-alpine
COPY --from=builder /app/dist/ /usr/share/nginx/html/

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
