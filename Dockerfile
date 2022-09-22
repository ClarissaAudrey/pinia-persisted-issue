FROM nikolaik/python-nodejs:python3.7-nodejs14-slim

WORKDIR /app

# Install vuecli
RUN npm install -g @vue/cli@latest



