import React from 'react';
import "./Output.css";

const output = function (props) {
    const msg = props.value.split('').map((elem,index)=>{
        return <div key={index} onClick={()=>props.click(index)}>{elem}</div>
    })
    return (
        <div className="output">{msg}</div>
    );
}

export default output;