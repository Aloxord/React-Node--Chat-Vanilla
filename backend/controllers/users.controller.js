const { okResponse } = require("../utils.js");
const { getAllUsers, createNewUser } = require("../services/users.service.js");

module.exports = (req,res)=>{
    const { method, url } = req;
    const [ , , id ] = url.split("/");
    if(method == "GET"){
        getAllUsers(data =>{
            okResponse(res,{data})
        });
    }
    if(method == "POST"){
        createNewUser(data =>{
            okResponse(res,{data})
        });
    }
}