import React, {createContext, useState} from 'react'

const fruits = [];

function FuirtProvider(props){

    // Values that are carry with Context 
    const [fruits, setFruits] = useState([])

    // Handle setState function from comsumer call
    function updateFruits(newFriuts){
        setFruits([...fruits, newFriuts])
    }

    return (
        // Pass all values and functions need be used in consumer 
        <FruitContext.Provider value={{
            fruits, 
            updateFruits
        }}>
            {/* has to be named props.children */}
            {props.children}
        </FruitContext.Provider>
    )
}

// export Context and Provider for Consumer
export const FruitContext = createContext();
export default FuirtProvider
