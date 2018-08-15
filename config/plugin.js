'use strict';

// had enabled by egg
exports.static = true;

// package 是 npm 方式引入，也是最常见的引入方式
// path 是绝对路径引入，如应用内部抽了一个插件，但还没达到开源发布独立 npm 的阶段，或者是应用自己覆盖了框架的一些插件
exports.mysql = {
  enable: true,
  package: 'egg-mysql',
};
