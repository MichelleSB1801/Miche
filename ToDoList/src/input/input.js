import React, { Component } from 'react';

class Input extends Component {
  constructor(props) {
    super(props)
    this.state = {
      valorTexto: '',
      array: [],
    }
  }

  handleChange(e) {
    const value = e.target.value
    this.setState({
      valorTexto: value
    })
  }

  send(){
    const arr = this.state.array
    arr.push(this.state.valorTexto)

    this.setState({
      array: arr
    })
  }
  

  render() {
    return (
      <div>
        <div className="input">
          <input onChange={this.handleChange.bind(this)} type="text" />
          <button onClick={this.send.bind(this)}>Send</button> 
        </div>
        <div className="list">
          {this.state.array.map((array,i) => {
            return(
              <div>
              <p key={i}>{array}</p>
              <input type="text" className="hide" />
              <button>Change</button>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default Input;