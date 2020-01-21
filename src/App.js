import React from 'react';
import './App.scss';
import Header from './components/Header/header.component';
import Main from './components/main/main.component';
import Footer from './components/Footer/footer.component';


class App extends React.Component{

  render () {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
  }
}

export default App;
