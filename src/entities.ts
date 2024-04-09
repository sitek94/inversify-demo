import {injectable, inject} from 'inversify'
import 'reflect-metadata'
import type {Weapon, ThrowableWeapon, Warrior} from './interfaces'
import {TYPES} from './types'

@injectable()
class Katana implements Weapon {
  public hit() {
    return 'cut!'
  }
}

@injectable()
class Shuriken implements ThrowableWeapon {
  public throw() {
    return 'whoosh... thud!'
  }
}

@injectable()
class Ninja implements Warrior {
  @inject(TYPES.Weapon) private katana!: Weapon
  @inject(TYPES.ThrowableWeapon) private shuriken!: ThrowableWeapon

  public fight() {
    return this.katana.hit()
  }

  public throw() {
    return this.shuriken.throw()
  }

  public walk() {
    return 'sneaking...'
  }
}

export {Ninja, Katana, Shuriken}
