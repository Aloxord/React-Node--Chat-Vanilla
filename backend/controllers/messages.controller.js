const { okResponse, getReqData } = require("../utils.js");
const { getMessagesByUserId, getAllMessages, createNewMessage } = require("../services/messages.service.js");

module.exports = async (req,res)=>{
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
        getReqData(req)
          .then(data=>{
            const { message,id } = data;
            createNewMessage(id,message,(data)=>{
              okResponse(res,{message:"oki"})
            });
          });
        

    }
}