import React from 'react';
import { useState, useEffect } from "react";


const Test = (props) => {

    useEffect(() => {
        console.log(props);
      }, [props]);

    return (
        <div>
           <p>HELLO {props.suite}</p> 
        </div>
    );
};

export default Test;