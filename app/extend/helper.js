'use strict';

module.exports = {
  // 增加一个 helper.foo() 方法
  foo(param) {
    // this 是 helper 对象，在其中可以调用其他 helper 方法
    // this.ctx => context 对象
    // this.app => application 对象
  },
};
