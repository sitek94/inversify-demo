import {Container} from 'inversify'
import {TYPES} from './types'
import {Warrior, Weapon, ThrowableWeapon} from './interfaces'
import {Ninja, Katana, Shuriken} from './entities'

const appContainer = new Container()
appContainer.bind<Warrior>(TYPES.Warrior).to(Ninja)
appContainer.bind<Weapon>(TYPES.Weapon).to(Katana)
appContainer.bind<ThrowableWeapon>(TYPES.ThrowableWeapon).to(Shuriken)

export {appContainer}
