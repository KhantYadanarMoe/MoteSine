# Use official PHP image with required extensions
FROM php:8.2-cli

# Install system dependencies
RUN apt-get update && apt-get install -y \
    git curl zip unzip libzip-dev libonig-dev libxml2-dev \
    npm nodejs \
    && docker-php-ext-install pdo pdo_mysql zip

# Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Set working directory
WORKDIR /var/www

# Copy all project files
COPY . .

# Install PHP and JS dependencies
RUN composer install --no-interaction --optimize-autoloader
RUN npm install && npm run build

# Generate app key
RUN php artisan key:generate

# Expose port
EXPOSE 8000

# Run Laravel server
CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=8000"]
