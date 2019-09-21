import React from 'react'
import AlertIcon from 'mdi-react/AlertIcon';
const MemoizedIcon = React.memo(AlertIcon)

const style = {
  display: 'flex',
  flexDirection: 'column',
  width: '200px'
}

const App = () => {
  const [state, setState] = React.useState(0)
  const [memoized, setMemoized] = React.useState(false)

  const inc = React.useCallback(() => void setState((state) => state + 1), [])
  const toggleMemo = React.useCallback(() => void setMemoized(state => !state), [])

  return (
    <div style={style}>
      <button onClick={inc}>toggle update {state}</button>
      <button onClick={toggleMemo}>{memoized ? 'using memoized' : 'not memoized'}</button>
      <div>
        { memoized ? <MemoizedIcon />: <AlertIcon />}
        { memoized ? <MemoizedIcon />: <AlertIcon />}
        { memoized ? <MemoizedIcon />: <AlertIcon />}
        { memoized ? <MemoizedIcon />: <AlertIcon />}
        { memoized ? <MemoizedIcon />: <AlertIcon />}
        { memoized ? <MemoizedIcon />: <AlertIcon />}
        { memoized ? <MemoizedIcon />: <AlertIcon />}
        { memoized ? <MemoizedIcon />: <AlertIcon />}
        { memoized ? <MemoizedIcon />: <AlertIcon />}
        { memoized ? <MemoizedIcon />: <AlertIcon />}
        { memoized ? <MemoizedIcon />: <AlertIcon />}
      </div>
    </div>
  )
}
export default App
