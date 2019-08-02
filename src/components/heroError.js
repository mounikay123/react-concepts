import React from 'react'

function HeroError({heroName}) {
 
    if(heroName==="joker"){
        throw new Error("not a hero");
        
    }
  return (
    <div>
      <h1>{heroName}</h1>
    </div>
  )
}

export default HeroError;
