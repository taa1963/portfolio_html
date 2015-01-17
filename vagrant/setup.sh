#/bin/sh

export LC_ALL=C
sudo apt-get update

# Mysql
echo mysql-server mysql-server/root_password password mysqlpass | sudo debconf-set-selections
echo mysql-server mysql-server/root_password_again password mysqlpass | sudo debconf-set-selections
sudo apt-get -q -y install mysql-client mysql-server

# Project dependencies
sudo apt-get -y install nginx php5-fpm php5-mysql php5-mongo php5-memcached vim php5-curl git php5-mcrypt curl

# Setup nginx conf
sudo rm /etc/nginx/sites-enabled/default
sudo cp /var/www/vagrant/nginx-host.conf /etc/nginx/sites-enabled

sudo cp /etc/php5/mods-available/mcrypt.ini /etc/php5/fpm/conf.d

# Setup php-fpm config
sudo rm /etc/php5/fpm/pool.d/www.conf
sudo cp /var/www/vagrant/php-fpm.conf /etc/php5/fpm/pool.d

# Restart services
sudo service php5-fpm restart
sudo service nginx restart
