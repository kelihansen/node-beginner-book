const server = require('./server');
const router = require('./router');
const requestHandlers = ('./request-handlers');

const handle = {};
handle['/'] = requestHandlers.start;
handle['/start'] = requestHandlers.start;
handle['/upload'] = requestHandlers.upload;

server.start(router.route);