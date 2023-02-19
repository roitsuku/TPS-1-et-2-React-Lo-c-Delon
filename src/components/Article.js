import React from 'react';
import { useState, useEffect } from "react";


const Article = (props) => {

    const [date, setDate] = useState([]);

    useEffect(() => {
        setDate(new Date(props.props['date']))
    });

    return (
        <div className='cardContainer' style={{width: 80 + '%'}}>
            {console.log(props)}
            <div>
                <h1>{props.props['author']}</h1>
                <h3>{"Posté le " + date.getDay() + "/" + date.getMonth() + "/" + date.getYear() + " à " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()}</h3>
            </div>
            <h3>{props.props['content']}</h3>
        </div>
    );
};

export default Article;