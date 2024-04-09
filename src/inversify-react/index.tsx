import {Provider} from 'inversify-react'
import {Hello} from './hello'
import {container} from './ioc'

export const Example = () => (
  <Provider container={container}>
    <Hello />
  </Provider>
)
