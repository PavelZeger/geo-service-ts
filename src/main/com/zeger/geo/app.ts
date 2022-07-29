// "use strict";
//
// import logger from "./util/logger";
//
// const http = require('http');
//
// const hostname = "127.0.0.1";
// const port = 8080;
//
// const server = http.createServer((request, response) => {
//     response.statusCode = 200;
//     response.setHeader("Content-Type", "text/plain");
//     response.end("Typescript Geo service");
// });
//
// server.listen(port, hostname, () => {
//     logger.info(`Server running at https://${hostname}:${port}/`);
// });
