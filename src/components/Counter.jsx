import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../redux/counterSlice';

function Counter() {
  const counterValue = useSelector((state) => state.counter.value);
  const [range, setRange] = useState(1)

  const dispatch = useDispatch();
  console.log(range);


  return (
    <>
      <div className='d-flex flex-column align-items-center justify-content-center w-100'>
        <h2 style={{ fontSize: "70px", color: "black" }}>{counterValue}</h2>
        <div className='mt-5'>
          <button className='btn btn-warning p-2 ' onClick={() => dispatch(decrement(Number(range)))} >DECREMENT</button>
          <button className='btn btn-success p-2 ms-3 me-3' onClick={() => dispatch(increment(Number(range)))}>INCREMENT</button>
          <button className='btn btn-danger p-2' style={{ width: "120px" }} onClick={() => dispatch(reset())}>RESET</button>
        </div>
      </div>
      <div>
        <input type="text" placeholder='Enter the range' className='form-control mt-3 w-100' style={{ borderColor: "blue" }} 
        onChange={(e)=>setRange(e.target.value)}/>
      </div>
    </>

  )
}

export default Counter