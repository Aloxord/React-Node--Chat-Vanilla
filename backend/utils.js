const { HEADERS } = require("./constants.js");
const { deleteUser } = require("./services/users.service.js");

module.exports = { 
    okResponse: (res, respBody)=>{
        res.writeHead(200, HEADERS);
        res.end(JSON.stringify(respBody));
    },
    optionsResponse: (res, respBody)=>{
        res.writeHead(204, {...HEADERS,"preflightContinue": true,});
        res.end();
    },
    badResponse: (res, respBody)=>{
        res.writeHead(404, HEADERS);
        res.end(JSON.stringify(respBody));
    },

    getReqData: (req)=> {
        return new Promise((resolve, reject) => {
            try {
                let body = "";

                req.on("data", (chunk) => {
                    
                    body += chunk.toString();
                });

                req.on("end", () => {
                    resolve(JSON.parse(body));
                });
            } catch (error) {
                reject(error);
            }
        });
    },
    userTimers: (()=>{
        const timers = {}
        return (id) => {
            if(!(id  in timers)){
                timers[id] = setTimeout(()=>{
                    deleteUser(id,()=>{
                        delete timers[id];
                        console.log(`User ${id} deleted due inactivity`);
                    })
                },60000);
                return;
            }
            clearTimeout(timers[id]);
            delete timers[id];
            timers[id] = setTimeout(()=>{
                deleteUser(id,()=>{
                    delete timers[id];
                    console.log(`User ${id} deleted due inactivity`);
                })
            },60000);
        }
    })()
}