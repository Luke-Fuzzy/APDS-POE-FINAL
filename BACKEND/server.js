// https://www.w3schools.com/nodejs/nodejs_modules.asp
const http = require('http')
const app = require('./app')
const fs = require('fs')
const PORT = 3000

// https://www.w3schools.com/nodejs/met_http_createserver.asp
const server = http.createServer(
    {
        key: fs.readFileSync('keys/privatekey.pem'),
        cert: fs.readFileSync('keys/certificate.pem')
    },app);

    server.listen(PORT)