import React, { useEffect, useState } from "react";
import Messages from "./Messages";
import Send from "./SendBtn";
import People from "./People";
import InputText from "./InputText";
import { get, post } from "../api";

function Room(){

    const [user, setUser] = useState({name:null,color:null});
    const [messages, setMessages ] = useState([]);
    const [message, setMessage] = useState("");
    const [sent, setSent] = useState(true);


    useEffect(()=>{
      let userPing = null;
      if(user.name == null){
        post("/user")
          .then(async (response)=>{
            const {data} = await response.json();
            setUser(data);
            
            userPing = setInterval(()=>{
              post(`/user/${data.id}`)
            },50000);

          })
      }
      return ()=>{
        if(user.name != null){
          
          clearInterval(userPing);
        }
      }

    },[user]);


    useEffect(()=>{
      const reload = setInterval(()=>{
        setSent(true);
      },2000);

      if(sent){
        setTimeout(()=>{
          get("/message")
              .then(async (response)=>{
                  const {data} = await response.json();
                  setMessages(data);
                  setSent(false);

              })
          },1000);
        }
        return ()=>{
          if(user.name != null){
            clearInterval(reload);
          }
        }
    },[sent]);

    return (
      <div className='chat__room'>
        <Messages 
          messages={messages}
          currentUser={user} />
        <People sent={sent} currentUser={user} />
        <InputText 
          setMessage={setMessage}
          setSent={setSent}
          message={message}
          user={user} />
        <Send
          setMessage={setMessage}
          setSent={setSent}
          message={message}
          user={user} />
      </div>
    );
}

export default Room;