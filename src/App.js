import './App.css';
import Header from './components/Header';
import Meme from './components/Meme';
import React from "react";

function App() {

  const [darkMode, setDarkMode] = React.useState(false);

  function toggleDarkMode() {
    setDarkMode(prev => !prev)
  }
  return (
    <div className="App">
      <Header
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode} />
      <Meme 
       darkMode={darkMode}/>
    </div>
  );
}

export default App;
