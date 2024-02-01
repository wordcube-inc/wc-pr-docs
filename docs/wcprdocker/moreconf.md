# Windows 更多配置

## 配置 hosts

添加 hosts。

```txt
127.0.0.1 wc-center.local
127.0.0.1 wc-console.local
127.0.0.1 wc-translate.local
127.0.0.1 newtac.local
```

## 生成 SSL 证书

在宿主机上为每个域名生成成对的 SSL 证书文件 —— `key` 和 'pem' 文件，将他们复制到 apache 或 nginx 对应的目录中。

## 在操作系统中导入证书

在 Chrome 中打开设置，依次选择 `隐私和安全 - 安全 - 管理证书`，在打开的窗口中导入生成的 `pem` 证书。

## 在 Chrome 中信任自签名证书

+ 在 Chrome 中，打开 chrome://flags。
+ 查找 "Insecure origins treated as secure"。
+ 将其设置为 "Enabled"。
+ 在 "Insecure origins" 输入框中添加你的本地开发域名: `https://newtac.local,https://wc-center.local,https://wc-console.local,https://wc-translate.local`。
+ 重新启动 Chrome。

## 在 Apache 中配置 SSL

你可以参考如下配置文件：

+ [httpd.conf](https://github.com/wordcube-inc/wc-pr-api-docker/blob/0d7a1db309f0f2650b22df2ec36dae2d98dd72f8/apache/httpd.conf)
+ [https-ssl.conf](https://github.com/wordcube-inc/wc-pr-api-docker/blob/0d7a1db309f0f2650b22df2ec36dae2d98dd72f8/apache/httpd-ssl.conf)
+ [httpd-vhosts.conf](https://github.com/wordcube-inc/wc-pr-api-docker/blob/0d7a1db309f0f2650b22df2ec36dae2d98dd72f8/apache/httpd-vhosts.conf)

在配置 vhosts 时，你需要将 `9991` 端口映射到 `wc-pr-repo` 的域名，将 `9992` 端口映射到 `wc-tr-repo` 的域名。

配置完成后，使用域名尝试在 Chrome 中访问，观察是否能使用 https 协议来访问页面。
