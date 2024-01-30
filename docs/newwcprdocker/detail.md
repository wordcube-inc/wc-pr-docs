# 细节

## 容器启动顺序

根据 `docker-compose.yml` 中的 `depends_on` 字段，容器的启动顺序是：

1. mysql
2. php
3. apache

任意容器启动过程中出错，都会影响后续容器的启动。

## PHP 容器安装 composer 再安装项目依赖

容器初始化时，会基于 `./php/Dockerfile` 来创建 PHP 容器。此时会安装 `pdo_mysql` 扩展，来让项目获得对 mysql 的支持。

PHP 镜像会按照 `./php/Dockerfile` 中的步骤来初始化，这个初始化流程是在构建镜像阶段完成的，所以如果修改了这个 Dockerfile，需要重新构建新的镜像，并用新的镜像来创建容器。

1. 安装 pdo_mysql 扩展
2. 换 debian 源
3. 使用 apt 安装  `git` 和 `zip`
2. 下载并安装 `composer`
4. composer 换源
6. 初始化 `php.ini`

然后使用 shell 命令来继续处理

5. 初始化项目 `.env` 配置
7. 使用 composer 安装项目依赖
8. 生成应用 key
9. 启动 php-fpm

## Apache 容器中的 ssl 证书

证书是提前就创建好的，放在 `./apache/newtac.local.pem` 和 `./apache/newtac.local.key`。每台机器只需要信任一次即可使用。