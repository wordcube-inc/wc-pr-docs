# 更多配置

## Apache 配置

Apache 的三个配置文件都放到了 `./apache` 中，

| 文件                                    | 配置            |
| --------------------------------------- | --------------- |
| ./apache/httpd.conf              | apache 基础配置 |
| ./apache/httpd-ssl.conf    | ssl 证书配置    |
| ./apache/httpd-vhosts.conf | 虚拟主机配置    |

修改 Apache 配置后，需要重新构建 Docker 镜像。前往 Docker Desktop，在 `Images` 选项卡中将 `wc-pr-api-apache` 删除，然后使用 `docker-compose down -v` 关闭容器，再重新使用 `docker-compose up` 构建镜像并启动容器。

## SSL 配置

SSL 证书存放在 `./apache` 目录中。

## Mysql 默认配置

> Mysql 配置最好是在第一次启动服务之前修改！！

修改 `./docker-compose.yml`文件

```yml
MYSQL_ROOT_PASSWORD: root_password
MYSQL_DATABASE: your_database
MYSQL_USER: your_user
MYSQL_PASSWORD: your_password
```

修改为对应的值。

修改 `./php/.env`

```text
DB_PORT=3306
DB_DATABASE=your_database
DB_USERNAME=your_user
DB_PASSWORD=your_password
```

修改为和 `./docker-compose.yml` 中匹配的值。

> `.env` 文件中 DB_HOST 的值是不需要改的。在使用 docker-compose 编排的服务中，mysql 的 host 就是 `mysql`。

如果你已经启动过服务，并且 `./mysql/data` 中已经存在数据，需要先使用 Mysql 工具将用户名、数据库名、密码等手动修改好。因为即使你修改了 `docker-compose.yml` 文件后也重启了容器，也不会影响已经存在在 mysql 数据中的用户名和密码等数据。这时最简单便捷的方法就先导出数据，再删掉 `./mysql/data`中的数据，让 mysql 服务重新生成用户数据。