import React, { useState } from 'react';
import './App.css';
import Home from './components/Home';
import MyContext from './MyContext';


function App() {

  const [showModal, setShowModal] = useState(false)

  return (
    <div className="App">
      <MyContext.Provider value={{ showModal, setShowModal }}>
        <Home />
      </MyContext.Provider>
    </div>
  );
}

export default App;
