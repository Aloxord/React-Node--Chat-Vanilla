import React from "react";
import Room from "../components/Room";

function Chat(){
    return (
    <div className='chat'>
        <header className='chat__title'><h1>Vanila Node + React chat app</h1></header>
        <Room />
    </div>
    );
}

export default Chat;