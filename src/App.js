import React from 'react';
import './App.css';
import HelloWorld from './HelloWorld'

const App = () => {
  return (
    <div className = "App">
      <HelloWorld name="Jim" surname="Brown" />
      <HelloWorld name="Sally" surname="Green" />
    </div>
  )
}

export default App