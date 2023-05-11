import React from "react";
import './cards.css';

export default function Card (props) {

    return <div className="card__container">
        <h1 className="card__title">{props.name}</h1>
        <p className="card__category">{props.category}</p>
        <p className="card__cost">R$ {props.cost}</p>
    </div>
};