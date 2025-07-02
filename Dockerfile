## Stage 1: Build Application Artifacts
FROM node:20-alpine AS builder

WORKDIR /app

# Enable pnpm for dependency management (Corepack is included in Node 20+)
RUN corepack enable pnpm

# Copy essential package files to leverage Docker layer caching
COPY package.json pnpm-lock.yaml ./

# Install project dependencies
RUN pnpm install

# Copy the remaining application files
COPY . .

# Build the Next.js application
RUN pnpm build

# Create a placeholder directory for Pagefind to prevent build errors
RUN mkdir -p /app/public/_pagefind

## Stage 2: Create Production-Ready Image
FROM node:20-alpine AS production

WORKDIR /app

# Copy built application artifacts from the builder stage
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public
COPY --from=builder /app/public/_pagefind ./public/_pagefind

# Start the Next.js production server
CMD ["node", "server.js"]