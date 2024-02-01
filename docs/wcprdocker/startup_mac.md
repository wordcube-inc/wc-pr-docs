# 快速开始

## 克隆[项目](https://github.com/wordcube-inc/wc-pr-api-docker)

```shell
$ git clone https://github.com/wordcube-inc/wc-pr-api-docker.git
```

## 配置项目

由于[启动步骤](detail.html#php-dockerfile)，你需要在启动之前完成项目的 `.env` 配置。

## 启动

```shell
$ docker-compose up
```

> 首次启动过程会比较漫长，docker 会按照 [Dockerfile](detail.html#php-dockerfile)来构建镜像，随后启动容器。

## 验证

当你看到控制台显示

```shell
wc-pr-api-wc-new-1     | Application key set successfully.
wc-pr-api-wc-new-1     | Starting Laravel development server: http://127.0.0.1:9990
wc-pr-api-wc-new-1     | [Thu Feb  1 14:39:11 2024] PHP 8.0.30 Development Server (http://127.0.0.1:9990) started
```

打开浏览器访问：`http://localhost:9991` 和 `http://localhost:9992`，查看页面是否正常显示。

:tada: 到此为止，你已经成功启动了容器，可以前往工作目录 `./wc-repo/wc-pr-repo` 和 `./wc-repo/wc-tr-repo` 开始编码了！

由于 docker 只负责启动项目目录的开发服务，就是将新项目的 `9990` 端口映射到宿主机的 `9992` 端口，将旧项目的 `9990` 端口映射到宿主机的 `9991` 端口。

所以后续的 hosts、SSL证书等需要你手动在宿主机上进行配置。后续的配置可以参考 [更多配置](moreconf.html)。