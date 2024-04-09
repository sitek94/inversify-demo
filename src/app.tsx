import {Ninja} from './entities'
import {appContainer} from './inversify.config'
import {TYPES} from './types'

const ninja = appContainer.get<Ninja>(TYPES.Warrior)

export function App() {
  return (
    <>
      <h1>Ninja fights: "{ninja.fight()}"</h1>
    </>
  )
}
