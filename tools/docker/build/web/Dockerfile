FROM	php:7.2-apache

RUN a2enmod rewrite &&\
	a2enmod headers &&\
	a2enmod ssl

RUN echo "ServerName localhost" >> /etc/apache2/apache2.conf

RUN apt-get update
RUN apt-get -y install apt-utils
RUN apt-get -y install sshpass ssh mc vim wget redis-tools build-essential tcl8.5 git curl mysql-client libcurl4-openssl-dev zlib1g-dev fontconfig --no-install-recommends && rm -r /var/lib/apt/lists/*
RUN docker-php-ext-install pdo pdo_mysql curl mbstring zip mysqli

RUN pecl install xdebug
RUN docker-php-ext-enable xdebug

RUN echo "date.timezone = 'UTC'" >> /usr/local/etc/php/php.ini
RUN echo "xdebug.remote_enable = 1" >> /usr/local/etc/php/php.ini
RUN echo "xdebug.idekey = 'netbeans-xdebug'" >> /usr/local/etc/php/php.ini
RUN echo "xdebug.remote_connect_back = 'on'" >> /usr/local/etc/php/php.ini

RUN git config --global url."https://".insteadOf git://
RUN git config --global core.fileMode false

RUN curl -sS https://getcomposer.org/installer | php && mv composer.phar /usr/local/bin/composer

# Node.js
RUN apt-get update && apt-get install -my gnupg
RUN curl -sL https://deb.nodesource.com/setup_9.x | bash -
RUN apt-get update && apt-get install -y nodejs

RUN npm -g config set user root
RUN npm install -g @angular/cli

#RUN git clone -b php7 https://github.com/phpredis/phpredis.git /usr/src/php/ext/redis \
#	&& docker-php-ext-install redis

# phpunit
RUN wget https://phar.phpunit.de/phpunit.phar && chmod +x phpunit.phar && mv phpunit.phar /usr/local/bin/phpunit

# Apache
ADD ./hosts/* /etc/apache2/sites-available/

RUN openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout /etc/ssl/private/diary.key \
    -out /etc/ssl/certs/diary.pem -subj "/C=GL/ST=GAMELOFT/L=GAMELOFT/O=Gameloft/OU=Gameloft/CN=diary.local.dev"

RUN cd /etc/apache2/sites-available/ && a2dissite * && a2ensite diary-ssl.conf

RUN mkdir /tmp/diary/
RUN chmod -R 777 /tmp/diary

WORKDIR /var/www/sources

EXPOSE 80 8080 443 3000
