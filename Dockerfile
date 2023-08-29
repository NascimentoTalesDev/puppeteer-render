FROM ghcr.io/puppeteer/puppeteer:21.1.1 

ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD \
    PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium-browser

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm ci 
COPY . .
CMD ["node", "index.js" ]
