const { HEADERS } = require("./constants.js");

module.exports = { 
    okResponse: (res, respBody)=>{
        res.writeHead(200, HEADERS);
        res.end(JSON.stringify(respBody));
    },
    badResponse: (res, respBody)=>{
        res.writeHead(404, HEADERS);
        res.end(JSON.stringify(respBody));
    }
}