export interface Warrior {
  fight(): string
  throw(): string
  walk(): string
}

export interface Weapon {
  hit(): string
}

export interface ThrowableWeapon {
  throw(): string
}
