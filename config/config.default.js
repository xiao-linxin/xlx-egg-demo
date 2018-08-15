'use strict';

// appInfo.root内置的有
// pkg	package.json
// name	应用名，同 pkg.name
// baseDir	应用代码的目录
// HOME	用户目录，如 admin 账户为 /home/admin
// root	应用根目录，只有在 local 和 unittest 环境下为 baseDir，其他都为 HOME。

module.exports = appInfo => {
  const config = exports = {};

  // 用于cookie签名密钥，应更改为您自己的并保持安全性
  config.keys = appInfo.name + '_1534328224300_2076';

  // 在这里添加您的配置
  config.middleware = [];

  // 数据库配置
  config.mysql = {
    // 单数据库信息配置
    client: {
      // host
      host: 'mysql.com',
      // 端口号
      port: '3306',
      // 用户名
      user: 'test_user',
      // 密码
      password: 'test_password',
      // 数据库名
      database: 'test',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };

  return config;
};
