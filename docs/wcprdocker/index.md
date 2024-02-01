---
prev: false
---

# 概述

## 项目概述

这里是 [这个项目 wc-pr-api-docker](https://github.com/wordcube-inc/wc-pr-api-docker) 的使用文档。

这个项目的主要目标是，使用 Docker 搭建一个开箱即用并统一的开发环境，使用后你会获得一个

+ PHP 8.0
+ PHP 7.4

的开发环境。

使用 docker 启动服务后，你需要在宿主机上自行配置 apache 或 nginx 和 SSL 证书等，以达到使用 https 来访问容器内服务的目的。

docker 会将 `wc-pr-repo` 中的项目开启到 `9991` 端口，将 `wc-tr-repo` 中的项目开启到 `9992` 端口。在启动之前，你需要将项目配置完毕后再启动 docker。

## 目录结构

```shell
.
├── README.md
├── .gitignore
├── docker-compose.yml          // docker 编排文件
└── wc-repo                     // 代码目录
    ├── wc-pr-repo              // 新项目目录
    └── wc-tr-repo              // 旧项目目录

```

## 准备开始

从 [环境准备](env.html)开始吧。