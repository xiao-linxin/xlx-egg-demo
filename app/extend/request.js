'use strict';

module.exports = {
  // 增加一个 request.foo 属性 Getter
  get foo() {
    return this.get('x-request-foo');
  },
};
