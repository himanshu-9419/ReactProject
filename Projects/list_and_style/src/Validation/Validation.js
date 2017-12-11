import React from 'react';

const validatiion = function(props){
    const msg=props.length<5?"Too Short":"Text Long Enough";
    return (
        <p>{msg}</p>
    );
}

export default validatiion;