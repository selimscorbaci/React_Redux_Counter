import './App.css';
import {useSelector,useDispatch} from 'react-redux';
import { decrement, increment, incrementByAmount,resetValue, selectCount } from './State/Redux/counterSlice';
import { useState } from 'react';

function App() {
  const count = useSelector(selectCount)
  const dispatch = useDispatch()
  const [incrementAmount,setIncrementAmount] = useState('2')
  
  return (
      <div className="counter">
        <span>Counter Application</span>
        <span className="count">{count}</span>
        <input type="text" placeholder='Set increment amount' onChange={(e)=>{setIncrementAmount(e.target.value)}}/>
        <div className="buttons">
          <button onClick={()=>dispatch(increment())}>Increment</button>
          <button onClick={()=>dispatch(decrement())}>Decrement</button>
          <button onClick={()=>dispatch(incrementByAmount(Number(incrementAmount)||0))}>Increment by amount</button>
          <button onClick={()=>dispatch(resetValue())}>Reset Value</button>
        </div>
      </div>
  );
}

export default App;
