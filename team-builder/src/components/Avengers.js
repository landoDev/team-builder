import React, {useState} from "react";

const Avengers  = props => {
    console.log(props)
    return (
        <div className="hero-list">
        {props.avengers.map(avenger => (
            <div className="avenger" key={avenger.id}>
            <h2>{avenger.alias}</h2>
            <p>{avenger.identity}</p>
            </div>
        ))}
        </div>
    );
};

export default Avengers;
