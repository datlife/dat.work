import React, { Component } from 'react';
import Header from './components/header';
// import Footer from './components/footer';
import Router from './routes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Router />
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
