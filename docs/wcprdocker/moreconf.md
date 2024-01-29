# 更多配置

## Apache 配置

Apache 容器的 `/usr/local/apache2/conf` 目录已经被映射到项目目录下的 `./apache/config`，所以你可以直接在容器外修改 Apache 对应的配置。

| 文件                                    | 配置            |
| --------------------------------------- | --------------- |
| ./apache/config/httpd.conf              | apache 基础配置 |
| ./apache/config/extra/httpd-ssl.conf    | ssl 证书配置    |
| ./apache/config/extra/httpd-vhosts.conf | 虚拟主机配置    |

修改 Apache 配置后，需要重启 Apache 容器。前往 Docker Desktop，使用停止按钮![](Xnip2024-01-27_23-44-42.png)来停止，再使用启动按钮![](Xnip2024-01-27_23-44-16.png)来重启 Apache 容器。

## SSL 配置

SSL 证书存放在 `./apache/config/ssl`

SSL 配置在 `./apache/config/extra/httpd-ssl.conf`

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

修改 `./php/www/.env`

```text
DB_PORT=3306
DB_DATABASE=your_database
DB_USERNAME=your_user
DB_PASSWORD=your_password
```

修改为和 `./docker-compose.yml` 中匹配的值。

> `.env` 文件中 DB_HOST 的值是不需要改的。在使用 docker-compose 编排的服务中，mysql 的 host 就是 `mysql`。

如果你已经启动过服务，并且 `./mysql/data` 中已经存在数据，需要先使用 Mysql 工具将用户名、数据库名、密码等手动修改好。因为即使你修改了 `docker-compose.yml` 文件后也重启了容器，也不会影响已经存在在 mysql 数据中的用户名和密码等数据。这时最简单便捷的方法就先导出数据，再删掉 `./mysql/data`中的数据，让 mysql 服务重新生成用户数据。