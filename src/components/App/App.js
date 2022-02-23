import React from 'react';
import './App.css';

class App extends React.Component {

  
  render() {
    console.log(process.env.NODE_ENV)
    return (
      <div className="App">
       hi
      </div>
    );
  }
}

export default App;
