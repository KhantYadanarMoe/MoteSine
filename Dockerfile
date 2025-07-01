FROM php:8.2-fpm

# Install system dependencies
RUN apt-get update && apt-get install -y \
    git curl zip unzip gnupg2 \
    libzip-dev libpng-dev \
    build-essential python3 \
    && docker-php-ext-install zip pdo pdo_mysql

# Install Composer globally
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Set working directory
WORKDIR /var/www

# Copy project files into container
COPY . /var/www

# Install PHP dependencies
RUN composer install --no-dev --optimize-autoloader

# Install Node.js 18
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && \
    apt-get install -y nodejs && \
    node -v && npm -v

# Set working directory to frontend directory (adjust if needed)
WORKDIR /var/www/resources/ui

# Confirm UI directory contents
RUN echo "Contents of UI folder:" && ls -al

# Install frontend dependencies and build assets
RUN npm install --legacy-peer-deps
RUN npm run build

# Reset working directory to Laravel root
WORKDIR /var/www

# Set correct permissions for Laravel
RUN chown -R www-data:www-data /var/www/storage /var/www/bootstrap/cache

# Expose Laravel dev server port
EXPOSE 8000

# Start Laravel using Artisan serve
CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=8000"]
