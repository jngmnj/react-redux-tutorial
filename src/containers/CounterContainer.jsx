import React from 'react'
import Counter from '../components/Counter'
import { connect } from 'react-redux'
import { increase, decrease } from '../modules/counter'
import { bindActionCreators } from 'redux'

const CounterContainer = ({ number, increase, decrease }) => {
  return (
    <Counter number={number} onIncrease={increase} onDecrease={decrease} />
  )
}

// mapStateToProps, mapDispatchToProps 따로 작성
// const mapStateToProps = state => ({
//   number: state.counter.number
// })

// const mapDispatchToProps = dispatch => ({
//   increase: () => {
//     dispatch(increase())
//   },
//   decrease: () => {
//     dispatch(decrease())
//   }
// })
// export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);

// bindActionCreators 사용
// export default connect(
//   state => ({
//     number: state.counter.number
//   }),
//   dispatch => 
//     bindActionCreators(
//       {
//         increase,
//         decrease      
//       },
//       dispatch
//     )
//   )(CounterContainer);

// 파라미터에 함수형태가 아닌 액션 생성함수로 이루어진 객체형태 넣기
export default connect(
  (state) => ({
    number: state.counter.number,
  }),
  {
    increase,
    decrease,
  }
)(CounterContainer);