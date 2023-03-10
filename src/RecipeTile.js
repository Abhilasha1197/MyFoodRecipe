import React from "react";
import "./RecipeTile.css";

export default function RecipeTile({ recipe }) {
  return (
    
      <div className="recipeTile" onClick={() =>{
        window.open(recipe["recipe"]["shareAs"])
      }}>
        <img
          className="recipeTile__img"
          src={recipe["recipe"]["image"]}
          alt="img"
        />
        <p className="recipeTile__name">{recipe["recipe"]["label"]}</p> 
      </div>
    
  );
}
