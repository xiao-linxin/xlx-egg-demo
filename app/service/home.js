'use strict';

const Service = require('egg').Service;

// this.ctx: 当前请求的上下文 Context 对象的实例，通过它我们可以拿到框架封装好的处理当前请求的各种便捷属性和方法。
// this.app: 当前应用 Application 对象的实例，通过它我们可以拿到框架提供的全局对象和方法。
// this.service：应用定义的 Service，通过它我们可以访问到其他业务层，等价于 this.ctx.service 。
// this.config：应用运行时的配置项。
// this.logger：logger 对象，上面有四个方法（debug，info，warn，error），分别代表打印四个不同级别的日志。

// service的ctx
// this.ctx.curl 发起网络调用。
// this.ctx.service.otherService 调用其他 Service。
// this.ctx.db 发起数据库调用等， db 可能是其他插件提前挂载到 app 上的模块。

class HomeService extends Service {
  async getData() {
    const result = await this.app.mysql.select('pet');
    return { result };
  }
}

module.exports = HomeService;
