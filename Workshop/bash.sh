#!/bin/bash

echo "=== Nginx Docker Setup ==="

# Check Docker
if ! command -v docker &> /dev/null; then
    echo "Docker is not installed."
    echo "Please install Docker first."
    exit 1
fi

# Pull Nginx
echo "Pulling Nginx image..."
docker pull nginx:latest

# Remove old container if it exists
if docker ps -a --format '{{.Names}}' | grep -q "^nginx$"; then
    echo "Removing old nginx container..."
    docker rm -f nginx
fi

# Run Nginx
echo "Starting Nginx..."
docker run -d \
    --name nginx \
    -p 80:80 \
    nginx:latest

echo ""
echo "Nginx is running!"
echo "Open: http://localhost"
