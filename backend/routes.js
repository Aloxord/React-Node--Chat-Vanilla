const { badResponse } = require("./utils.js");
const messagesController = require("./controllers/messages.controller.js");
const usersController = require("./controllers/users.controller.js");

module.exports = (req,res) => {
    
    const { url } = req;
    const [ , route, ] = url.split("/");

    try{
    const routes = {
        "message": () => messagesController(req,res),
        "user": () => usersController(req,res)
    }
        return routes[route]();
    }catch(e){
        badResponse(res,{message: "Route is not available"})

    }
};