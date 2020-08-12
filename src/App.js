import React, { createContext } from 'react';
import './App.css';

// Need a provider to wrap children component
import FruitProvider from './context/fruits_context'

// Children component ie. consumer
import FruitsList from './components/fruits_list';
import FruitsCount from './components/fruits_count';

function App() {
  return (
    <div className="App">
      {/* Wrap children compoenent with the provider*/}
      <FruitProvider>
        <FruitsList />
        <FruitsCount />
      </FruitProvider>
    </div>
  );
}

export default App;
