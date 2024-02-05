# 后续配置

> 后续的配置是为了可以使用域名和 https 来访问容器内的服务。

## 生成 SSL 证书

以域名 `newtac.local` 为例。

```shell
openssl genrsa -out newtac.local.key 3072
openssl req -new -x509 -key newtac.local.key -sha256 -out newtac.local.pem -days 730 -subj 
```

这两条命令可以生成一对证书文件：`newtac.local.key` 和 `newtac.local.pem`，你可以拿这两个文件到 Apache 或 Nginx 中配置 SSL。

## 配置 Apache SSL 和 vhosts

:::danger 注意
下面的配置信息来自于此 docker 中之前配置过的信息，不保证一定可用，仅供参考。
:::

以域名 `newtac.local` 为例，这是 `httpd-ssl.conf` 配置：

```text
Listen 443
SSLCipherSuite HIGH:MEDIUM:!MD5:!RC4:!3DES
SSLProxyCipherSuite HIGH:MEDIUM:!MD5:!RC4:!3DES
SSLHonorCipherOrder on 
SSLProtocol all -SSLv3
SSLProxyProtocol all -SSLv3
SSLPassPhraseDialog  builtin
SSLSessionCache        "shmcb:/usr/local/apache2/logs/ssl_scache(512000)"
SSLSessionCacheTimeout  300
<VirtualHost _default_:443>
DocumentRoot "/var/www/html"
ServerName newtac.local:443
ServerAdmin you@example.com
ErrorLog "/usr/local/apache2/logs/error.log"
ErrorLog "/usr/local/apache2/logs/access.log"
SSLEngine on
SSLCertificateFile "/usr/local/apache2/conf/ssl/newtac.local.pem"
SSLCertificateKeyFile "/usr/local/apache2/conf/ssl/newtac.local.key"
<FilesMatch "\.(cgi|shtml|phtml|php)$">
    SSLOptions +StdEnvVars
</FilesMatch>
<Directory "/usr/local/apache2/cgi-bin">
    SSLOptions +StdEnvVars
</Directory>
BrowserMatch "MSIE [2-5]" \
         nokeepalive ssl-unclean-shutdown \
         downgrade-1.0 force-response-1.0
CustomLog /proc/self/fd/1 \
          "%t %h %{SSL_PROTOCOL}x %{SSL_CIPHER}x \"%r\" %b"
</VirtualHost>    
```

下面是完整的 `httpd-vhosts.conf` 配置，注意要自行替换 `SSLCertificateFile` 和 `SSLCertificateKeyFile` 后面的文件路径。

```text
<VirtualHost *:443>
    ServerName newtac.local
    DocumentRoot /var/www/html/public

    SSLEngine on
    SSLCertificateFile /usr/local/apache2/conf/ssl/newtac.local.pem
    SSLCertificateKeyFile /usr/local/apache2/conf/ssl/newtac.local.key

    <FilesMatch \.php$>
        SetHandler "proxy:fcgi://php:9000"
    </FilesMatch>

    <Directory "/var/www/html/public">
        AllowOverride All
        Require all granted 
        DirectoryIndex index.php index.html 
    </Directory>
</VirtualHost>
```