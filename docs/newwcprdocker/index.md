
# 概述

::: danger 更新内容
这个文档在 2024年01月30日 更新过一次，更新的内容有：
1. php、apache 两个目录结构更加扁平化，去掉 config、script、www 等目录。
2. php 的配置文件放在镜像中，不再外挂出来。php 和 apache 的配置转移到了 Dockerfile 中，整个流程在构建镜像的流程中完成。
3. ssl 证书提前生成好，放在 apache 目录中，不再是每次启动容器的时候来生成。变更了 [`快速开始`](startup.html) 的流程，因为证书是提前生成好的，所以在项目启动之前就可以先去信任证书了。
4. 去掉了 init.sh 脚本，尽可能地让 Dockerfile 来完成初始化工作。
:::


这里是 [这个项目 wc-pr-api-docker](https://github.com/wordcube-inc/wc-pr-api-docker) 的使用文档。

这个项目的主要目标是，使用 Docker 搭建一个开箱即用并统一的开发环境，使用后你会获得一个

+ PHP 8.0
+ Apache 2.4.57
+ Mysql 8.0.32
+ Laravel 8

的开发环境。

这个文档中如果出现在不同操作系统存在差异的相关内容，会使用

:::tip 这个颜色
来表示 MacOS
:::

:::warning 这个颜色
来表示 Windows
:::

如果你准备好了，那么从 [环境准备](env.html) 开始。