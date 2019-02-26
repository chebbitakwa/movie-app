import React, { Component } from 'react';
import './rating.css'
const Rating =({star, changeProp })=>{
    
    let affichage=[]
    for (let i=0; i < 5 ; i++){
   if (i < star) {
   affichage.push(
    <span key={i} onClick={()=> changeProp(i + 1)}>
     <i className="fas fa-star star"/>
    </span>
  );
} else {
  affichage.push(
    <span key={i} onClick={() => changeProp(i + 1)}>
     <i className="fas fa-star stars"/>
    </span>
  );
}
}

    return (
        <div>{affichage}</div>
    )
    }
   
    
export default Rating