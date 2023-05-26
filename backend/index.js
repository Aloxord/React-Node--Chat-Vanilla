const http = require('http');
const { PORT } = require('./constants.js');
const routes = require('./routes.js');

const server = http.createServer(routes);

server.listen(PORT, () => {
    console.log(`server started on port: ${PORT}`);
});