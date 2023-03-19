import { useRef, useState, useEffect, memo, useCallback, useMemo, useReducer } from 'react'

/* useReducer
  - init state: 0
  - Actions Up(state + 1), Down(state - 1)
  - Reducer
  - Dispatch
*/
import reducer, {initState} from './reducer'
import { setJob, addJob, deleteJob } from './actions'

// Dispatch

function App() {
  const [state, dispatch] = useReducer(reducer, initState)
  const { job, jobs } = state
  const inputRef = useRef() // focus thẻ input

  const handleSubmit = () => {
    dispatch(addJob(job))
    dispatch(setJob(''))

    inputRef.current.focus()
  }
  return (
    <div style={{ padding: 20 }}>
      <h3>Todo</h3>
      <input
        ref={inputRef}
        value={job}
        placeholder="Enter todo ..."
        onChange={e => {
          dispatch(setJob(e.target.value))
        }}
      />
      <button onClick={handleSubmit}>Add</button>
      <ul>
        {jobs.map(function (job, index) {
          return (
            <li key={index}>
              {job}
              <span onClick={() => dispatch(deleteJob(index))}>
                &times;
              </span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default App;
