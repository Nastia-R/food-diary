#!/bin/bash

DATADIR=/var/lib/mysql/
BACKUPDATADIR=/var/scripts/backup/

service mysql stop
cp -a $BACKUPDATADIR$1/* $DATADIR/$1/
find $DATADIR -name 'ib_*' -delete
service mysql start

