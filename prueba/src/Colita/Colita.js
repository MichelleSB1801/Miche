import React, { Component } from 'react';
import './Colita.css';

class Colita extends Component {
  constructor(props) {
    super(props)
    this.props = props
    this.state = {
      pintado : false
    }
  }
  clickMe(){
    const actualState = this.state.pintado
    this.setState({
      pintado: !actualState
    })
  }

  render() {
    let cl = 'cuadradito'
    if(this.state.pintado){
      cl = cl + ' pintadito'
    }

    return (
      <div className='main'>
        <img src={this.props.image} />
       <p> {this.props.titulo}</p>
       <p> {this.props.price}</p>
       <div className={cl} onClick={this.clickMe.Bin(this)}></div>
      </div>
    );
  }
}

export default Colita;