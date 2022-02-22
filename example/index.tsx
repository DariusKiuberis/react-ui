import 'react-app-polyfill/ie11'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Button } from '../src/components/atoms/Button/Button'
// import Settings from './mocks/svg/Settings'

const App = () => {
  return (
    <div>
      <Button
        // styleContent={{ color: 'red' }}
        label={'--Label---'}
        // startIcon={<Settings fill={'tomato'} />}
        // endIcon={<Settings fill={'tomato'} />}
        // disabled={true}
        // variant={'contained'}
        // outlined={false}
        // size={'100%'}
        // loading={true}
        // color={'red888'}
      >
        <div style={{ color: 'brown' }}>Children One</div>
        <div>Children Two</div>
      </Button>
      <Button
        // styleContent={{ color: 'aqua' }}
        label={'lalal'}
        labelColor={'red'}
        variant={'contained'}
      >
        <div>Labas</div>
      </Button>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
