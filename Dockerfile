FROM oven/bun:1 as base
WORKDIR /usr/src/app

COPY . .
RUN bun install
RUN bun run build

USER bun
EXPOSE 3000/tcp
ENTRYPOINT ["bun", ".output/server/index.mjs"]
