import React, { Component } from 'react';
import './App.css';
import Colita from './Colita/Colita';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className = 'container'> 
          <Colita 
            image='https://www.juan-gallo.com/static/perfil2.jpg'
            titulo='Juani de bolsillo'
            price='$50'/>
          <Colita   
            image='https://www.juan-gallo.com/static/perfil2.jpg'
            titulo='Juani de bolsillo'
            price='$50'/>
          <Colita 
            image='https://www.juan-gallo.com/static/perfil2.jpg'
            titulo='Juani de bolsillo'
            price='$50'/>
          <Colita 
            image='https://www.juan-gallo.com/static/perfil2.jpg'
            titulo='Juani de bolsillo'
            price='$50'/>
        </div>    
      </div>
    );
  }
}

export default App;
