import { useState } from 'react'
import Counter from './components/Counter'
import Todos from './components/Todos'
import CounterContainer from './containers/CounterContainer'

function App() {
  return (
    <>
      {/* <Counter number={0} /> */}
      <CounterContainer />
      <hr />
      <Todos />
    </>
  )
}

export default App
