# -------- BUILD STAGE --------
FROM node:20-alpine AS builder

WORKDIR /app

# Копіюємо тільки те, що потрібно для встановлення залежностей
COPY package*.json ./

RUN npm install

# Копіюємо весь проєкт
COPY . .

# Запускаємо білд
RUN npm run build

# -------- RUNTIME STAGE --------
FROM node:20-alpine

# Для кращого керування процесами
RUN apk add --no-cache dumb-init

WORKDIR /app

# Копіюємо потрібні артефакти
COPY --from=builder /app/dist/analog ./

# Відкриваємо порт (якщо в тебе не змінився, лишається 3000)
EXPOSE 3000

# Запуск SSR-серверу
CMD ["dumb-init", "node", "server/index.mjs"]
