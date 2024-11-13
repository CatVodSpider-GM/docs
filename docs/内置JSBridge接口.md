# 内置 JSBridge 接口

本爬虫支持大部分的Greasemonkey API,详情可以参考[Android-WebMonkey](https://github.com/warren-bank/Android-WebMonkey)

还提供了一些其他的扩充API

## GetSpiderArgs[获取当前执行的方法及参数]
```javascript
GmSpiderInject.GetSpiderArgs()
```
### 返回信息
返回信息为`JSON`字符串,解析后为一个数组，第一项为方法名，余下依次为参数

### 示例代码

``` javascript
const GMSpiderArgs = {};
if (typeof GmSpiderInject !== 'undefined') {
    let args = JSON.parse(GmSpiderInject.GetSpiderArgs());
    GMSpiderArgs.fName = args.shift();
    GMSpiderArgs.fArgs = args;
} else {
    //使用 Chrome 浏览器进行调试时，可以手动设置当前调试的方法
    GMSpiderArgs.fName = "homeContent";
    GMSpiderArgs.fArgs = [true];
}
Object.freeze(GMSpiderArgs);
```

## SetSpiderResult[返回Userscript运行结果]
```javascript
GmSpiderInject.SetSpiderResult()
```
### 返回信息
返回信息为`JSON`字符串,解析后为一个数组，第一项为方法名，余下依次为参数

### 示例代码

``` javascript
if (typeof GmSpiderInject !== 'undefined') {
    GmSpiderInject.SetSpiderResult(JSON.stringify(result));
}
```