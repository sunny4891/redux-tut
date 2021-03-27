import React from 'react';
import User from './User';
import HomeContainer from './containers/HomeContainer';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <h1>App Component</h1> */}
      {/* <User data={{name:"Prasenjit Saha",age:"26"}} /> */}
      <HomeContainer/>
    </div>
  );
}

export default App;
