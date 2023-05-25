import React from "react";
import Messages from "./Messages";
import Send from "./SendBtn";
import People from "./People";
import InputText from "./InputText";

function Room(){
    return (
      <div className='chat__room'>
        <Messages />
        <People />
        <InputText />
        <Send />
      </div>
    );
}

export default Room;