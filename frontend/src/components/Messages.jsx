import React, { useEffect, useState,useRef } from "react";
import { get } from "../api";

function Messages({currentUser,messages}){
  
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages]);

  return (
      <div className='chat__show'>

        <div className="chat__messages">
          {messages.map(item=>{
              const {id,color, text} = item;
              return (
                  <div className='chat__message' style={{ alignSelf: currentUser.id == id ? "flex-end":"" }}>
                      <span className='chat__color' style={{backgroundColor:`#${color}`}}></span>
                      {text}
                  </div>
              );
          })}
          <div ref={messagesEndRef} />
        </div>
      </div>
  );
}

export default Messages;