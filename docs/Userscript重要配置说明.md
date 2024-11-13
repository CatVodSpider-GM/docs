# Userscript重要配置说明

关于Userscript的编写可以参考

https://learn.scriptcat.org/

https://www.tampermonkey.net/documentation.php

https://wiki.greasespot.net/Tutorials

本文主要讲解重点需要关注的几个配置项

## @run-at

注入脚本的时机，本爬虫仅支持  `document-start`和`document-end`默认为 `document-end`

如果需要hook ajax请求，请设置为`document-end`以确保脚本能够hook所有请求

## @match

脚本匹配的网址，确保爬虫所有牵扯到的域名都备规则包含

具体的匹配规则编写可以参考 [Match patterns](https://developer.chrome.com/docs/extensions/develop/concepts/match-patterns?hl=zh-cn)

## @require 

引用外部脚本，可以引用一些封装好的的js库