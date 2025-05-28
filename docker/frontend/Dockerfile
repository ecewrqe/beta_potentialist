FROM node:23.11.1-slim

# Install curl and security updates
RUN apt-get update && apt-get install -y curl && apt-get upgrade -y && rm -rf /var/lib/apt/lists/*

WORKDIR /app
COPY . .
RUN npm install && npm run build
EXPOSE 3000
CMD ["npm", "start"]