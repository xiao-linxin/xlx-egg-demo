'use strict';

const BAR = Symbol('Context#bar');


module.exports = {
  // 增加一个 ctx.foo() 方法：
  foo(param) {
    // this 就是 ctx 对象，在其中可以调用 ctx 上的其他方法，或访问属性
  },

  // 增加一个 ctx.bar 属性 Getter
  get bar() {
    // this 就是 ctx 对象，在其中可以调用 ctx 上的其他方法，或访问属性
    if (!this[BAR]) {
      // 例如，从 header 中获取，实际情况肯定更复杂
      this[BAR] = this.get('x-bar');
    }
    return this[BAR];
  },
};

