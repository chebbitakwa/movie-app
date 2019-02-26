import React, { Component } from 'react';
import './movie.css';
import Rating from './Rating'
const Movie =(props)=>{
    
    return (
        <div className="film">
            <div>
                <img src={props.element.image} alt="" ></img>
            </div>
            <div className="titre">
                <h5> {props.element.titre}</h5>
                <h6> {props.element.annee}</h6>
            </div>
            <div><Rating star={props.element.rating}/></div>
        </div>
    )
}



export default Movie;