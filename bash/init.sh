#!/bin/bash

# Install Node.js and npm
curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
sudo apt-get install -y nodejs

# Update npm to the latest version
sudo npm install -g npm

# Change to the /app directory
cd /app

# Install dependencies using npm
npm install

# Build the project
npm run build


sudo cp -R build/. /var/www/html