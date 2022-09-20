import React from 'react';
import './App.css';
import Context from './context/GlobalStates';
import Router from './routes/router';


function App() {
  return (
    <Context>
      <Router />
    </Context>
  );
}

export default App;
