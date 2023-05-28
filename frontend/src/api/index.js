import { HOST } from "../constants"

function request(path,method,data=null){
    const url = `${HOST}${path}`
  
    return fetch(url,{
        method: method,
        mode: "cors",
        cache: "no-cache",
        credentials: "omit",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
        redirect: "follow",
        referrerPolicy: "no-referrer", 
        body: data ? JSON.stringify(data) : data,
      });
}

export const get = (path)=>{
    return request(path,"GET");
}

export const post = (path,data)=>{
  return request(path,"POST",data);
}