import React from 'react';
import './App.css';

import Navigation from "./components/Navigation/Navigation.js";
import Landing from "./container/Landing/Landing.js"

function App() {
  return (
    <div>
      <Navigation />
      <Landing />
    </div>
  );
}

export default App;
