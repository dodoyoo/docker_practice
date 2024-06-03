const express = require('express');

const threadController = require('../controllers/threadController');
const threadRouter = express.Router();

const { loginRequired } = require('../utils/auth');

threadRouter.get('/list', threadController.getThread);
threadRouter.get('/:id', threadController.getThreadDetail);
threadRouter.post('/upload', threadController.uploadThread);
threadRouter.patch('/:id', loginRequired, threadController.editThread);
threadRouter.delete('/:id', loginRequired, threadController.deleteThread);
threadRouter.post(
  '/like/:id',
  loginRequired,
  threadController.createLikeThread
);
threadRouter.delete(
  '/unlike/:id',
  loginRequired,
  threadController.deleteLikeThread
);

module.exports = { threadRouter };
