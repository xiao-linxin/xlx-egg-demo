'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
};

// 完整定义
// router.verb('path-match', app.controller.action);
// router.verb('router-name', 'path-match', app.controller.action);
// router.verb('path-match', middleware1, ..., middlewareN, app.controller.action);
// router.verb('router-name', 'path-match', middleware1, ..., middlewareN, app.controller.action);

// router.get('/home', controller.home);
// router.get('/user/:id', controller.user.page);
// router.post('/admin', isAdmin, controller.admin);
// router.post('/user', isLoginUser, hasAdminPermission, controller.user.create);
// router.post('/api/v1/comments', controller.v1.comments.create);

// router.resources('posts', '/api/posts', controller.posts);
// router.resources('users', '/api/v1/users', controller.v1.users);
