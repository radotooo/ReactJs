import React, { useState } from 'react';
import './App.css';
import Home from './components/Home';
import MyContext from './MyContext';


function App() {

  const [value, setValue] = useState(false)

  return (
    <div className="App">
      <MyContext.Provider value={{ value, setValue }}>
        <Home />
      </MyContext.Provider>
    </div>
  );
}

export default App;
