import 'react-app-polyfill/ie11'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Button } from '../src/components/atoms/Button/Button'
import { Circle } from '../src/components/atoms/Spinners'
// import Settings from './mocks/svg/Settings'

const App = () => {
  const handle = (f: any) => {
    console.log(333, f)
  }
  return (
    <div>
      <Button label={'btn1'} onClick={() => console.log('btn1')} />
      <Button label={'btn2'} />
      <Button
        label={'btn3 upload'}
        variant={'upload'}
        handleFile={(f) => handle(f)}
      />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
