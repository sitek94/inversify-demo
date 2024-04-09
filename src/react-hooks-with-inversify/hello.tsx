import React from 'react'
import {useInjection} from './ioc.react'
import type {Provider} from './providers'

export const Hello: React.FC = () => {
  const provider = useInjection<Provider<string>>('nameProvider')

  return <h1>Hello {provider.provide()}!</h1>
}
