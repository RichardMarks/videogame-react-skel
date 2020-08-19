import 'videogame'

const vg = window.videogame || new Error('videogame library not found')

const {
  Animation,
  BaseTile,
  BaseTransition,
  Color,
  Command,
  FontFamily,
  FontSprite,
  Frame,
  Point,
  Rect,
  Scene,
  Sprite,
  TextSprite,
  Videogame
} = vg

export {
  Animation,
  BaseTile,
  BaseTransition,
  Color,
  Command,
  FontFamily,
  FontSprite,
  Frame,
  Point,
  Rect,
  Scene,
  Sprite,
  TextSprite,
  Videogame
}

export default vg
