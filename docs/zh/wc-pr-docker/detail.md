# 更多细节

## docker-compose.yml

[文件地址](https://github.com/wordcube-inc/wc-pr-docker/blob/main/docker-compose.yml)

使用 docker-compose 编排了 5 个服务：1 个 Mysql 和 4 个 Laravel 项目。它们分别对应的端口和仓库可以查看 [支持的仓库](/zh/wc-pr-docker/repo.html)。

## Dockerfile

除 Mysql 容器外，另外 4 个项目的镜像均由 Dockerfile 构建。

[Dockerfile - wc-center](https://github.com/wordcube-inc/wc-pr-docker/blob/main/wc-repo/wc-center/Dockerfile)

[Dockerfile - wc-console](https://github.com/wordcube-inc/wc-pr-docker/blob/main/wc-repo/wc-console/Dockerfile)

[Dockerfile - wc-pr-api](https://github.com/wordcube-inc/wc-pr-docker/blob/main/wc-repo/wc-pr-api/Dockerfile)

[Dockerfile - wc-translate](https://github.com/wordcube-inc/wc-pr-docker/blob/main/wc-repo/wc-translate/Dockerfile)

每个 Dockerfile 的流程基本都是：

1. 从指定 php 版本创建镜像
2. 换 debian 源
3. 安装必要的系统依赖
4. 安装必要的 php 扩展
5. 安装 composer
6. composer 换源
7. 配置 php.ini
8. composer 安装依赖 `composer install -vvv`
9. laravel 生成项目 key `php artisan key:generate`
10. 启动开发服务 `php artisan serve --host=0.0.0.0 --port=9990`

## Mysql

值得一提的是，`mysql/init-sql/init.sql` 是 mysql 服务中的数据库的初始化 sql 脚本，里面存放了数据库结构和测试数据。会在 mysql 容器第一次启动时运行。

此外，`mysql/data` 中是 mysql 容器的数据目录，用于存放 mysql 的数据文件，不会加入版本控制，但也不要轻易删除。删除后本地的测试数据会全部消失。