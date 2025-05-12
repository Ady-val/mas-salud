# Stage 1: Builder
FROM node:22.14.0-slim AS builder
WORKDIR /usr/src/app

# 1) Instala pnpm global (si usas pnpm)
RUN npm install -g pnpm

# 2) Copia solo manifest y lockfile e instala todas las deps
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# 3) Copia el código fuente y ejecuta el build de Next.js
COPY . .
RUN pnpm run build

# Stage 2: Runtime
FROM node:22.14.0-slim
WORKDIR /usr/src/app

# 4) Instala pnpm para producción
RUN npm install -g pnpm

# 5) Copia manifest y lockfile e instala solo prod deps (Next.js necesita react/react-dom)
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --prod --frozen-lockfile

# 6) Copia los artefactos de build
COPY --from=builder /usr/src/app/.next ./.next
COPY --from=builder /usr/src/app/public ./public
COPY --from=builder /usr/src/app/next.config.js ./
# Si tienes tsconfig.build.json o archivos de entorno en `/public` u otro lugar, cópialos aquí

# 7) Variables y arranque
ENV NODE_ENV=production
ENV PORT=3000
EXPOSE 3000

CMD ["pnpm", "start"]
