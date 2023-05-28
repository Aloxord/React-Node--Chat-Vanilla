import React, { useEffect, useState } from "react";
import { get } from "../api";


function People({currentUser,sent}){
    const [users, setUsers] = useState([]);
    const [count, setCount] = useState(0);
    const { name, color } = currentUser;

    useEffect(()=>{
        setTimeout(()=>{
            get("/user")
                .then(async (response)=>{
                    const {data:{count,users}} = await response.json();
                    setUsers(users);
                    setCount(count);
                })
            },1000);
      },[sent]);

    return (
        
        <div className='chat__people' >
            {users.map(item=>{
                const {name,color} = item;
                return (
                    <div className='chat__tab' style={{ backgroundColor: currentUser.name == name ? "rgba(255,255,255,0.1)":"" }}>
                        <span className='chat__color' style={{backgroundColor:`#${color}`}}></span>
                        {name}
                    </div>
                );
            })}
        </div>
    );
}

export default People;