import {Container} from 'inversify'
import {Provider, NameProvider} from './providers'

export const container = new Container()

container.bind<Provider<string>>('nameProvider').to(NameProvider)
