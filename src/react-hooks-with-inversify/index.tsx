import {Hello} from './hello'
import {container} from './ioc'
import {Provider} from './ioc.react'

export const Example = () => (
  <Provider container={container}>
    <Hello />
  </Provider>
)
