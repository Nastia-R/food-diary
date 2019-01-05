#!/bin/bash

DATADIR=/var/lib/mysql/
BACKUPDATADIR=/var/scripts/backup/

service mysql stop
cp -a $DATADIR$1 $BACKUPDATADIR
service mysql start