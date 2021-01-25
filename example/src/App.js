import React from 'react'
import { ExampleComponent, Foo, Bar } from '@darius-kiuberis/react-ui'
import '@darius-kiuberis/react-ui/dist/index.css'

const App = () => {
  return (
    <div>
      <ExampleComponent text="Create React Library Example 😄" />
      <Foo text={"FOOO"}/>
      <Bar text={"BARRR"} />
    </div>
  )

}

export default App
