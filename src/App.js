import React from 'react';

import Card from './components/Cards';

import './App.css';

function App() {
  return (
    <div className="App">
      <Card name ="test 1" likes={ 0 }></Card>
      <Card name ="test 2"></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>

    </div>
  );
}

export default App;
