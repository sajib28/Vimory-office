import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="shopping-list">
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
