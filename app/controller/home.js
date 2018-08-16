'use strict';

const Controller = require('egg').Controller;

// this.ctx: 当前请求的上下文 Context 对象的实例，通过它我们可以拿到框架封装好的处理当前请求的各种便捷属性和方法。
// this.app: 当前应用 Application 对象的实例，通过它我们可以拿到框架提供的全局对象和方法。
// this.service：应用定义的 Service，通过它我们可以访问到其他业务层，等价于 this.ctx.service 。
// this.config：应用运行时的配置项。
// this.logger：logger 对象，上面有四个方法（debug，info，warn，error），分别代表打印四个不同级别的日志。
// this.ctx.queries 获取get请求参数 返回数组
// this.ctx.params.? 获取get请求参数指定的值
// this.ctx.request.body 获取请求参数
// ctx.headers = ctx.header = ctx.request.headers = ctx.request.header 都是获取整个 header 对象。（自动处理大小写）
// ctx.get(name)，ctx.request.get(name)：获取请求 header 中的一个字段的值，如果这个字段不存在，会返回空字符串。
// ctx.host 获取 host 这个 header 的值。config.hostHeaders 默认配置为 x-forwarded-host。
// ctx.protocol 通过这个 Getter 获取 protocol 时，首先会判断当前连接是否是加密连接，如果是加密连接，返回 https。 config.protocolHeaders 默认配置为 x-forwarded-proto。
// ctx.ips 通过 ctx.ips 获取请求经过所有的中间设备 IP 地址列表，只有在 config.proxy = true 时，才会通过读取 config.ipHeaders 中配置的 header 的值来获取，获取不到时为空数组。 config.ipHeaders 默认配置为 x-forwarded-for。
// ctx.ip 通过 ctx.ip 获取请求发起方的 IP 地址，优先从 ctx.ips 中获取，ctx.ips 为空时使用连接上发起方的 IP 地址。 注意：ip 和 ips 不同，ip 当 config.proxy = false 时会返回当前连接发起者的 ip 地址，ips 此时会为空数组。
// ctx.cookies 浏览器 默认可读可修改可读，可修改
// ctx.session 浏览器 默认不可读不可修改
// ctx.validate(rule, [body]) 直接对参数进行校验
// ctx.body 是 ctx.response.body 的简写，不要和 ctx.request.body 混淆了。
// app.jsonp() 提供的中间件来让一个 controller 支持响应 JSONP 格式的数据。
// 通过 ctx.set(key, value) 方法可以设置一个响应头，ctx.set(headers) 设置多个 Header。
// ctx.redirect(url) 如果不在配置的白名单域名内，则禁止跳转。
// ctx.unsafeRedirect(url) 不判断域名，直接跳转，一般不建议使用，明确了解可能带来的风险后使用。

// Reflected XSS 防范。当网站需要直接输出用户输入的结果时，请务必使用 helper.escape()。
// JSONP XSS 内置插件 jsonp-body 进行安全防范

// egg 内置安全头
// X-Download-Options:noopen 默认开启，禁用 IE 下下载框Open按钮，防止 IE 下下载文件默认被打开 XSS。
// X-Content-Type-Options:nosniff 禁用 IE8 自动嗅探 mime 功能例如 text/plain 却当成 text/html 渲染，特别当本站点 serve 的内容未必可信的时候。
// X-XSS-Protection IE 提供的一些 XSS 检测与防范，默认开启 close 默认值false，即设置为 1; mode=block


class HomeController extends Controller {
  async index() {
    const { ctx, service } = this;
    // const id = await service.home.getData(ctx.request.body);
    // // const post = await this.app.mysql.select('t_admin');
    // ctx.body = {
    //   topic_id: id,
    // };
    ctx.body = 'hello world![]~(￣▽￣)~*';
    ctx.status = 200;
  }


}

module.exports = HomeController;
