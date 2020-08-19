import 'videogame-plugin/src/clickable'
import 'videogame-plugin/src/controllable'
import 'videogame-plugin/src/fog'
import 'videogame-plugin/src/jumper'
import 'videogame-plugin/src/starfield'

const plugins = window.videogame.plugin || new Error('videogame-plugin library not found')

const {
  ClickableSprite,
  CursorSprite
} = plugins.clickable

const {
  ControllableSprite
} = plugins.controllable

const {
  Fog
} = plugins.fog

const {
  JumperSprite
} = plugins.jumper

const {
  Starfield
} = plugins.starfield

// console.log({ plugins })

const pluginsExtracted = {
  ClickableSprite,
  CursorSprite,
  ControllableSprite,
  Fog,
  JumperSprite,
  Starfield
}

export {
  ClickableSprite,
  CursorSprite,
  ControllableSprite,
  Fog,
  JumperSprite,
  Starfield
}

export default pluginsExtracted
