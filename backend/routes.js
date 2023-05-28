const { badResponse, optionsResponse } = require("./utils.js");
const messagesController = require("./controllers/messages.controller.js");
const usersController = require("./controllers/users.controller.js");
const { HEADERS } = require("./constants.js");

module.exports = (req,res) => {
    
    const { url,method } = req;
    const [ , route, ] = url.split("/");

    try{
    if(method == "OPTIONS"){
        optionsResponse(res,HEADERS);
    }
    
    const routes = {
        "message": () => messagesController(req,res),
        "user": () => usersController(req,res)
    }
        return routes[route]();
    }catch(e){
        badResponse(res,{message: "Route is not available"})

    }
};