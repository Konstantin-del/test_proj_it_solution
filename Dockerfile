FROM node:24-bookworm-slim

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

ENV DATABASE_URL="postgresql://postgres:postgres@postgres:5432/digital_card?schema=public"

RUN npx prisma generate && npm run build

CMD ["sh", "-c", "npx prisma migrate deploy && node dist/main"]