'use strict';

module.exports = {
  watch: {
    tasks: ['webpack:dev'],
    options: {
      logConcurrentOutput: true,
      limit: 5
    }
  }
};
