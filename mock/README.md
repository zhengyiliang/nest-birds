# 离线开发

> 前期只有需求和接口文档的情况下，不依赖公司网络或后台服务，前端如何快速启动开发？<br/>
在家办公，或者无网络状态下，是否也能愉快开发？<br/>
**假数据服务**是前端开发必不可少的工具


## 在线文档
+ mock规则文档：http://mockjs.com/
+ esky-mock文档：https://github.com/esky/esky-mock

## 项目配置
mock目录位于项目根目录下
```
.
├── mock                             # mock服务目录
│   ├── data                         # 存放假数据文件
│   └── config.js                    # 配置文件
```
config.js
```js
module.exports = {
  // 请求默认的延迟时间
  delay: 300,
  // 基础路径，假数据的URL省略该路径不写
  base: 'api',
  // 服务端口，配合webpack的代理使用
  port: 3001,
  dataDir: 'mock/data'
}
```
package.json
```js
"scripts": {
  "start": "concurrently -k \"npm run mock\" \"npm run dev\"",
  "mock": "esky-mock -c mock/config.js"
}
```
webpack.config.dev.js
```js
devServer: {
  port: devPort,
  // 开启可以本地IP访问
  // 但sockjs-node请求地址的域名会不对
  // host: '0.0.0.0',
  historyApiFallback: true,
  proxy: [{
    context: ['/api', '/cgi-bin'],
    target: `http://${localIP}:3001`,
    // target: 'http://119.28.78.98:7300/mock/5bab817575ebdd531ad5b912',
    secure: false
  }]
}
```

## 数据示例

1. 简单示例：

~~~js
// 使用mockjs语法
{
  'ui/grid/load': {
    'code': 200,
    'data': {
      'result|100': [{
        'id|+1': 1,
        account: '@email',
        name: '@cname'
      }],
      'totalCount|500-1000': 1
    }
  }
}
~~~

2. 完整格式：

~~~js
{
  'ui/grid/load': {
    // 请求延迟毫秒数
    delay: 300,
    // 是否使用mockjs库解析
    useMockjs: true,
    // 响应内容对象/函数
    response: {
      'code': 200,
      'data': {
        'result|100': [{
          'id|+1': 1,
          account: '@email',
          name: '@cname'
        }],
        'totalCount|500-1000': 1
      }
    )
  }
}
~~~

3. 高级示例：

~~~js
// response若为函数，则每次请求均会执行。
// 需要对请求编程时可使用，可以自己处理响应
{
  'ui/grid/load': {
    // req请求对象，res响应对象
    // 文档：http://www.expressjs.com.cn/4x/api.html
    response: function(req, res){
      // 私有代码
      // 可以返回JSON，仍然支持mockjs语法
      // return {}
      // 可以操作response对象来响应内容
      res.json({})
    }
  }
}
~~~
