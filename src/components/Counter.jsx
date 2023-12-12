import React from 'react'
import { decrease, increase } from '../modules/counter'

const Counter = ({ number, onIncrease, onDecrease }) => {
  // console.log(number, onIncrease, onDecrease)
  return (
    <div>
        <h1>{ number }</h1>
        <div>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    </div>
  )
}

export default Counter