import React from "react";
import { useState } from "react";



function Message(){
  const [state,setState]=useState("Welcome Visitor");
    return (
    <div>
        <h1>{state}</h1>
        <button onClick={ ()=>setState("THanks for Subscription")} enable>Subscribe</button>
    </div>
    )
}

export default Message