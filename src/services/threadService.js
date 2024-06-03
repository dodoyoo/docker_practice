const threadDao = require('../models/threadDao');

const uploadThread = async (userId, content) => {
  await threadDao.uploadThread(userId, content);
};

const editThread = async (threadId, userId, content) => {
  await threadDao.editThread(threadId, userId, content);
};

const deleteThread = async (threadId, userId, content) => {
  await threadDao.deleteThread(threadId, userId, content);
};

module.exports = { uploadThread, editThread, deleteThread };
