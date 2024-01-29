# 细节

## 容器启动顺序

根据 `docker-compose.yml` 中的 `depends_on` 字段，容器的启动顺序是：

1. mysql
2. php
3. apache

任意容器启动过程中出错，都会影响后续容器的启动。

## PHP 容器安装 composer 再安装项目依赖

容器初始化时，会基于 `./php/script/Dockerfile` 来创建 PHP 容器。此时会安装 `pdo_mysql` 扩展，来让项目获得对 mysql 的支持。

PHP 容器就绪后，会执行 `./php/script/init.sh` 脚本来进行服务的启动。这个脚本会：

1. 下载并安装 `composer`
2. 换 debian 源
3. 使用 apt 安装  `git` 和 `zip`
4. composer 换源
5. 初始化项目 `.env` 配置
6. 初始化 `php.ini`
7. 使用 composer 安装项目依赖
8. 生成应用 key
9. 启动 php-fpm

::: danger 提示
如果已经安装过依赖，我们视为这个容器已经初始化完毕，下次再启动容器的时候不会执行上述过程。

如果想要重新进行这个过程，请删除 `./php/www/vendor` 目录。

如果后面需要重新安装项目依赖，也请删除 `./php/www/vendor` 目录并重新启动容器。
:::

## Apache 容器自动生成证书

容器就绪后，会执行 `./apache/script/init.sh` 来启动服务。这个脚本具体做的事情是：

1. 调用系统中自带的 openssl 生成 ssl 证书文件，放到 `./apache/conf/ssl` 目录下
2. 启动 Apache

::: danger 提示
如果已经生成过 ssl 证书了，再次启动容器的时候，不会执行生成过程。

如果想要重新进行这个过程，请删除 `./apache/conf/ssl` 目录。
:::