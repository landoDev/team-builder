import React from "react";


const Avengers  = props => {
    console.log(props)
    return (
        <div className="hero-list">
        {props.avengers.map(avenger => (
            <div className="avenger" key={avenger.id}>
            <div className="avatar">
                <img src={avenger.avatar} alt="avenger-avatar"></img>
            </div>
            <h2>{avenger.alias}</h2>
            <p>{avenger.identity}</p>
            <p>{avenger.superpower}</p>
            <p>{avenger.home}</p>
            </div>
        ))}
        </div>
    );
};

export default Avengers;
