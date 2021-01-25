import React from 'react'
import { Button} from '@darius-kiuberis/react-ui'

const App = () => {
  return (
    <div>
      <Button label={33377} />
      <Button onClick={(e) => e} disabled={true} />
      <Button>
        <div>child</div>
      </Button>
    </div>
  )
}

export default App
