import React, { Component } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Blog from './containers/blog';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Header /> */}
        <Blog />
        <Footer />
      </div>
    );
  }
}

export default App;
