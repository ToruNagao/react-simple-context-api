import React, {useContext, useState, useEffect} from 'react';
import { FruitContext } from '../context/fruits_context'

function Child(props) {

    // useContext and inherit FruitContext
    const fruitContext = useContext(FruitContext); 
    
    useEffect(() => {
        let temp = ['apple']
        
        // Call function / value using contextName.propertyName
        fruitContext.updateFruits(temp)
    }, [])

    function addFruits(){
        let newFruit = document.getElementById('input-fruit').value;
        if(newFruit != ""){
            fruitContext.updateFruits(newFruit );
            document.getElementById('input-fruit').value = "";
        }
   
    }

    return(
        fruitContext.fruits.length > 0  ?
        <div>
            <ul>
                {fruitContext.fruits.map((fruit, i) => (
                    <li key={i}>{fruit}</li>
                ))}
                <input type="text" id="input-fruit"/>
                <button  onClick={() => addFruits()}>Add Fruits</button>
            </ul>
        </div>: <h1>Null</h1>
    )
}

export default Child