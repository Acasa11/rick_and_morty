import React from "react";

export default function Card({name, id, status, species, gender, origin, image, onClose}) {
   return (
      <div 
         style={{
            backgroundColor: "grey",
            margin: "20px",
            padding: "20px",
            borderRadius: "15px",
         }}
      >
         <button onClick={() => onClose(id)}>X</button>
         <h2>{name}</h2>
         <h2>{id}</h2>
         <h2>{status}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{origin}</h2>
         <img src={image} alt={name}/>
      </div>
   );
}