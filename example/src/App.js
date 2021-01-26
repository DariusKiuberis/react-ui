import React from 'react'
import { Button } from '@darius-kiuberis/react-ui'
import './App.css'

const App = () => {
  return (
    <div style={{
      display: "flex", justifyContent: "space-around",
      alignItems: "center", height: "100vh"
    }}>
      <Button className="darius" />
      <Button
        style={{ backgroundColor: "red" }}
        label={"lalal" + 33377}
        onClick={(e) => e}
        disabled={false}
      >
        <div>child</div>
      </Button>

    </div>
  )
}

export default App
