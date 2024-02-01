# 细节

## PHP Dockerfile

构建镜像时，项目会依照 Dockerfile 执行构建流程。构建过程包括如下步骤：

1. 安装 pdo_mysql 扩展
2. 换 debian 源
3. 使用 apt 安装  `git` 和 `zip`
2. 下载并安装 `composer`
4. composer 换源
6. 初始化 `php.ini`

容器启动时，会使用 shell 命令来继续处理：

5. 初始化项目 `.env` 配置
7. 使用 composer 安装项目依赖
8. 生成应用 key
9. 启动开发服务