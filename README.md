# CatVodSpider-GM

一个基于 WebView、JSBridge 等技术实现的一个用 Userscript（Javascript） 编写 CatVod 爬虫的方案


## 特性

- 基于原生 WebView，对反爬虫、代码混淆、接口加密校验等 有良好的抵御效果
- 基于原生 WebView，对 Javascript 的兼容性极佳
- 背靠 Userscript 及其 Javascript 大生态， 参考资料齐全
- 极高的可定制性和通用性，在已知的通用解决方案中名列前茅
- 理论上实现方案可以在不修改 Userscript 的情况下迁移到其他平台

## 缺点

因为强依赖于 WebView,所以在内存占用、运行效率上肯定会低于纯 Java 的实现方案

## 文档
本文档部分内容是基于指定软硬件信息及个人理解编写，在不同应用、不同版本、不同硬件上可能会有区别、欢迎指正

本文档示例及测试的软硬件相关信息
- 硬件: 移动机顶盒（CPU:S905L3A 内存:2G）
- 系统:  [slimBOXtv 9.14 V4 S905L3A Mod ATV](https://www.right.com.cn/forum/thread-8372263-1-1.html)(Android 9)
- WebView: Android System WebView(129.0.6668.54)
- 应用: OK影视电视版(2.6.0)

[基础知识](./docs/基础知识.md)

[开发工具及环境搭建](./docs/开发工具及环境搭建.md)

[CatVod常用数据结构](./docs/CatVod常用数据结构.md)

[爬虫的常规配置说明](./docs/爬虫的常规配置说明.md)

[Userscript重要配置说明](./docs/Userscript重要配置说明.md)

[内置JSBridge接口](./docs/内置JSBridge接口.md)

[常用实现方案介绍(附带模版)](./docs/常用实现方案介绍(附带模版).md)

[参考资料及Javascript类库推荐](./docs/参考资料及Javascript类库推荐.md)

[常见问题FAQ](./docs/常见问题FAQ.md)

## 示例项目

[SFW-Spiders](https://github.com/CatVodSpider-GM/SFW-Spiders)

[NSFW-Spiders](https://github.com/CatVodSpider-GM/NSFW-Spiders)

## 项目参考
- [warren-bank/Android-WebMonkey](https://github.com/warren-bank/Android-WebMonkey)
- [wbayer/webview-gm](https://github.com/wbayer/webview-gm)