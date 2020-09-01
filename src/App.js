import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './Hello';

function App({name}) {
  return <div>Hello! {name} <Hello fn = {name}></Hello></div>
}

export default App;
