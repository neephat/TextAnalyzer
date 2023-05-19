import React from 'react'

export default function Alerts(props) {
    const capitalized = (word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
    
      <div style={{'height': '50px'}}>
      {props.alertMsg && <div className={`container alert alert-${props.alertMsg.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalized(props.alertMsg.type)}!!!!!!!!!</strong>   {props.alertMsg.msg}
      </div>}
      </div>
    
  )
}
