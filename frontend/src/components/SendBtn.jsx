import React from "react";
import { post } from "../api";

function Send({message,user,setMessage, setSent}){

  const handleClick = e =>{
    e.preventDefault();
    post("/message",{
      message,
      id:user.id
    }).then(()=>{
      setSent(true);
      setMessage("");
    });
  }

  return (
      <div className="chat__send">
        <button 
          className="chat__button"
          onClick={handleClick}>&#9654;</button>

      </div>
  );
}

export default Send;