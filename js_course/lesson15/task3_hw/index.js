// ============ LOGGER =================

function createLogger() {
  const memory = [];
  function warn(text) {
    const loggerWarn = {
      message: text,
      dateTime: new Date(),
      type: 'warn',
    };
    memory.push(loggerWarn);
  }

  function error(text) {
    const loggerError = {
      message: text,
      dateTime: new Date(),
      type: 'error',
    };
    memory.push(loggerError);
  }

  function log(text) {
    const loggerLog = {
      message: text,
      dateTime: new Date(),
      type: 'log',
    };
    memory.push(loggerLog);
  }

  function getRecords(text) {
    if (text) {
      return memory
        .filter((obj) => obj.type === text)
        .sort((a, b) => b.dateTime - a.dateTime);
    }
    return memory.sort((a, b) => b.dateTime - a.dateTime);
  }

  return {
    warn,
    error,
    log,
    getRecords,
  };
}

const logger = createLogger();
logger.log('User make something with log');
logger.error('Unexpected error on the site !');
logger.warn('User try to restricted page !');
logger.log('User logged out');

console.log(logger.getRecords());
console.log(logger.getRecords('log'));
console.log(logger.getRecords('warn'));
console.log(logger.getRecords('error'));
