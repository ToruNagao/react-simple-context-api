import React, {useContext, createContext} from 'react';
import { FruitContext } from '../context/fruits_context';

function FruitsCount (props) {

    const fruitContext = useContext(FruitContext); 
    return(
        fruitContext.fruits.length > 1?
        <h1>You got {fruitContext.fruits.length} fruits</h1>: 
        <h1>You got {fruitContext.fruits.length} fruit</h1>
    )
}

export default FruitsCount 