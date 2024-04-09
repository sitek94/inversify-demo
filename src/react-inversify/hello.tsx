import * as React from 'react'
import {inject, injectable} from 'inversify'
import {connect} from 'react-inversify'
import type {Provider} from './providers'

type Props = {
  nameProvider: Provider<string>
}

@injectable()
class Dependencies {
  constructor(
    @inject('nameProvider') public readonly nameProvider: Provider<string>,
  ) {}
}

@connect(Dependencies, deps => ({
  nameProvider: deps.nameProvider,
}))
export class Hello extends React.Component<Props> {
  render(): React.ReactNode {
    return <h1>Hello {this.props.nameProvider.provide()}!</h1>
  }
}
