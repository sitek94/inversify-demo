import * as React from 'react'
import {resolve} from 'inversify-react'
import type {Provider} from './providers'

export class Hello extends React.Component {
  @resolve('nameProvider') private readonly nameProvider!: Provider<string>

  render() {
    return <h1>Hello {this.nameProvider.provide()}!</h1>
  }
}
