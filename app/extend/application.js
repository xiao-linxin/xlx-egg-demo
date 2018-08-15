'use strict';

// 框架扩展
const BAR = Symbol('Application#bar');

module.exports = {
  // 增加一个 app.foo() 方法：
  foo(param) {
    // this 就是 app 对象，在其中可以调用 app 上的其他方法，或访问属性
  },

  // 增加一个 app.bar 属性 Getter
  get bar() {
    // this 就是 app 对象，在其中可以调用 app 上的其他方法，或访问属性
    if (!this[BAR]) {
      // 实际情况肯定更复杂
      this[BAR] = this.config.xx + this.config.yy;
    }
    return this[BAR];
  }
};
