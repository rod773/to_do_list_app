# Use a small, production-ready Nginx image
FROM nginx:stable-alpine

# Remove default nginx static assets
RUN rm -rf /usr/share/nginx/html/*

# Copy all static files and set permissions
COPY . /usr/share/nginx/html/
RUN chmod -R 755 /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80