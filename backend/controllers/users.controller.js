const { okResponse } = require("../utils.js");
const { getAllUsers, createNewUser } = require("../services/users.service.js");
const { userTimers } = require("../utils.js");

module.exports = (req,res)=>{
    const { method, url } = req;
    const [ , , id ] = url.split("/");

    if(method == "GET"){
        getAllUsers(data =>{
            return okResponse(res,{data})
        });
    }
    if(method == "POST"){
        if(parseInt(id)){
            userTimers(id);
            return okResponse(res,{message:"Keeping alive"});
        }
        createNewUser(data =>{
            const { id } = data;
            okResponse(res,{data})
            return userTimers(id);
        });
    }
}