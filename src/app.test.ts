import {Ninja} from './entities'
import {appContainer} from './inversify.config'
import {TYPES} from './types'

import {expect, test} from 'vitest'

const ninja = appContainer.get<Ninja>(TYPES.Warrior)

test('Ninja should be able to fight', () => {
  expect(ninja.fight()).toEqual('cut!')
  expect(ninja.walk()).toEqual('sneaking...')
  expect(ninja.throw()).toEqual('whoosh... thud!')
})
