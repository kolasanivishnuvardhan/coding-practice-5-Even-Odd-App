import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {count:0,even:true}
  onClickIncrement = ()=>{
    const randomNumber = Math.floor(Math.random()*99)+1
    this.setState((prevState)=>{
      return {count:prevState.count+randomNumber}
    })

  }
  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="count-container">
          <h1 className="heading">Count {count}</h1>
          <p className="description-1">Count is {count%2?"Odd":"Even"}</p>
          <button className="btn" type="button" onClick={this.onClickIncrement}>
            Increment
          </button>
          <p className="description-2">
            *Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
