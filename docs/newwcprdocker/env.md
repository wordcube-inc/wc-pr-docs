# 环境准备

安装 [Docker](https://www.docker.com/) 和 [Docker-compose](https://github.com/docker/compose/releases)。

安装完成后可以使用各自的 `-v` 命令来检查是否安装成功。

```shell
$ docker -v
Docker version 24.0.5, build ced0996

$ docker-compose -v
Docker Compose version v2.20.2-desktop.1
```

::: danger 注意
本项目容器内的 apache 需要占用宿主机的 `80` 和 `443` 端口，如果宿主机已经有程序（如安装在宿主机上的 nginx 等）占用了这两个端口，需要避开或关闭。
:::