import React from 'react'
import ButtonComponent from './components/Button/ButtonComponent'

const App = () => {
  return (
    <div style={{
      display: "flex", justifyContent: "space-around",
      alignItems: "center", height: "100vh"
    }}>
      <ButtonComponent />
    </div>
  )
}
console.log("🚀 ~ file: App.js ~ line 24 ~ App ~ App", process.env)

export default App
