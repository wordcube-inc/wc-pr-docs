# 快速开始

## 克隆 docker 仓库

```shell
$ https://github.com/wordcube-inc/wc-pr-docker.git
```

初始的仓库目录应该是如下状态

```text
.
├── README.md
├── docker-compose.yml
├── mysql
│   ├── data # mysql 数据文件
│   └── init-sql
│       └── init.sql # 初始化数据库脚本
└── wc-repo  # repo 根目录，下面是所支持的4个repo各自的项目目录
    ├── wc-center
    │   ├── Dockerfile
    │   ├── README.md
    │   ├── debian-source.list
    ├── wc-console
    │   ├── Dockerfile
    │   ├── README.md
    │   ├── debian-source.list
    ├── wc-pr-api
    │   ├── Dockerfile
    │   ├── README.md
    │   ├── debian-source.list
    └── wc-translate
        ├── Dockerfile
        ├── README.md
        ├── debian-source.list

```



## 克隆项目仓库

以 `wc-center` 项目为例，你需要 cd 到 `wc-center` 目录中，克隆对应的项目仓库。

每个仓库所对应的仓库地址，在各自的目录下的 `README.md` 中有写。

```shell
$ cd wc-repo/wc-center
$ git clone https://github.com/wordcube-inc/wc-center.git
```

每个项目的 repo 的地址可以在 [支持的仓库](repo.html) 查看。

## 项目具体配置

由于 docker 只负责配置环境和启动项目，所以项目启动之前的配置需要你现在手动来完成。对于每个项目，它们各自的配置不太一样。

### All

每个项目都相同的配置是，你需要自行复制 `.env.example`，并完成`.env` 的配置，其中主要是数据库配置：

```text
DB_CONNECTION=mysql
DB_HOST=mysql
DB_PORT=3306
DB_DATABASE=newtac_one_beta
DB_USERNAME=root
DB_PASSWORD=local_root_password
```

`DB_HOST` 是 mysql 容器的名字，在这里作为 host 传入。端口、用户名、密码都是在 `docker-compose.yml` 中配置的。

### wc-center

这个项目最省心了，不需要另外配置。

### wc-pr-api

这个项目也最省心了，不需要配置什么。

### wc-console

由于没有配置 `Apache`，在访问根路径时重定向逻辑有些问题。需要修改 `/app/Libraries/ConsoleServer.php` 56 行附近，将 `case '/'` 一块改为

```php
case '/' : {
    require SRC_PATH . '/common/sg_parse.php';
    require_once ROOT . '/home.php';
    break;
}
```

即可。

后续配置了 Apache 环境后可以尝试把这段代码还原。

### wc-translate

由于统一进行了数据库配置，修改 `config/database.php` 中 68 行，在下面加一行：

```php
'host' => env('DB_HOST_LANGUAGE', '127.0.0.1'),
```

在 `.env` 中修改 `DB_HOST_LANGUAGE` 的相关配置：

```text
DB_HOST_LANGUAGE=mysql
DB_DATABASE_LANGUAGE=newtac_one_beta
DB_USERNAME_LANGUAGE=root
DB_PASSWORD_LANGUAGE=local_root_password
```

## 

## 根据你需要启动的项目修改 docker-compose

> 当然不修改也没事，每个镜像和容器是独立构建的，没有准备好的项目在启动的时候会自动跳过。

修改 `docker-compose-yml`，在 `wc-pr-api`、`wc-center`、`wc-console`、`wc-translate`中，只保留你需要启动的配置块，其余的都注释掉。



## 启动

```shell
$ docker-compose up
```



## 查看启动结果

在浏览器中依次访问

```text
http://localhost:9991
http://localhost:9992
http://localhost:9993
http://localhost:9994
```

如果页面都访问正常，则启动成功。
