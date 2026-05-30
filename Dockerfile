# Stage 1: Use nginx to serve the static site
FROM nginx:1.27-alpine

# Remove default nginx static assets
RUN rm -rf /usr/share/nginx/html/*

# Copy built site files into the nginx web root
COPY dist/ /usr/share/nginx/html/

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# nginx runs in the foreground by default in the official image
CMD ["nginx", "-g", "daemon off;"]
