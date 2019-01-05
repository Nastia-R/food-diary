FROM debian:latest
MAINTAINER Alexandr Nikolenko <alexandr.nikolenko@gameloft.com>

RUN apt-get update && apt-get -y install mysql-server mc openssh-server vim mysql-client --no-install-recommends && rm -r /var/lib/apt/lists/*

RUN mkdir -p /var/scripts/backup

COPY ./scripts/*.sh /var/scripts/

RUN chmod 755 /var/scripts/docker-entrypoint.sh

WORKDIR /var/scripts

ENTRYPOINT ["/var/scripts/docker-entrypoint.sh"]

EXPOSE 3306 22