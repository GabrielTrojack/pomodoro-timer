import { createContext, useContext, useState } from 'react'

const Context = createContext({} as any)

export function Study2() {
  const { number, setNumber } = useContext(Context)
  return (
    <h2>
      Study2:{number}
      <button onClick={() => setNumber(3)}>+1</button>
    </h2>
  )
}

export function Study1() {
  const { number, setNumber } = useContext(Context)
  return (
    <h2>
      Study1:{number}
      <button onClick={() => setNumber(9)}>+1</button>
    </h2>
  )
}

export function ContextStudy() {
  const [number, setNumber] = useState(0)
  return (
    <Context.Provider value={{ number, setNumber }}>
      <div>
        <h1>home</h1>
        <Study1 />
        <Study2 />
      </div>
    </Context.Provider>
  )
}
