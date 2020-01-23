import React from 'react';
import './App.scss';
import Header from './components/Header/header.component';
import Main from './components/main/main.component';
import Footer from './components/Footer/footer.component';
import {BrowserRouter} from 'react-router-dom'

class App extends React.Component{

  render () {
  return (
    <div className="App">
     <BrowserRouter>
      <Header/>
      <Main/>
      <Footer/>
      </BrowserRouter>
    </div>
   
  );
  }
}

export default App;
