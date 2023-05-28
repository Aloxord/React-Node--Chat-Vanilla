import React, { useState } from "react";
import { post } from "../api";

function InputText({user,message,setMessage,setSent}){

    const handleChange = e=>{
        setMessage(e.target.value);
    }

    const handleKeyDown = e =>{
        if (e.key === 'Enter'){
            post("/message",{
                message,
                id:user.id
            }).then(()=>{
                setSent(true);
                setMessage("");
            });
        }
      }

    return (
        <input 
            placeholder='Escriba su mensaje...' 
            className="chat__input"
            value={message}
            onChange={(e)=>handleChange(e)}
            onKeyDown={(e)=>handleKeyDown(e)}
             />
    );
}

export default InputText;