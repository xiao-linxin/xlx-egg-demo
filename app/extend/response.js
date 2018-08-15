'use strict';

module.exports = {
  // 增加一个 response.foo 属性 setter
  // 就可以这样使用啦：this.response.foo = 'bar';
  set foo(value) {
    this.set('x-response-foo', value);
  },
};
