const { okResponse } = require("../utils.js");
const { getMessagesByUserId, getAllMessages } = require("../services/messages.service.js");

module.exports = (req,res)=>{
    const { method, url } = req;
    const [ , , id ] = url.split("/");
    if(method == "GET"){
      if(parseInt(id) ){
        getMessagesByUserId(id, data =>{
          okResponse(res,{data})
        });
      }else{
        getAllMessages(data =>{
          okResponse(res,{data})
        });
      }
    }
    if(method == "POST"){
        okResponse(res,{message:"oki"})

    }
}