// import the css to apply the styling
import 'style/index.css'

// import the Videogame API
import {
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
} from './api/vg'

// import the Videogame plugins
import {
  ClickableSprite,
  CursorSprite,
  ControllableSprite,
  Fog,
  JumperSprite,
  Starfield
} from './api/vg-plugins'

// optionally log everything imported to the console to verify that it loaded ok
console.log({
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
}, {
  ClickableSprite,
  CursorSprite,
  ControllableSprite,
  Fog,
  JumperSprite,
  Starfield
})

// optional structure for building your game
const SkeletonGame = {
  create (gameTitleText) {
    const scene = Videogame.scene()
      .setColor(Color.Navy)

    const starfield = new Starfield()
      .setSpeedX(-1)
      .setSpeedY(1)

    const score = new TextSprite()
      .setWidth(16)
      .setHeight(16)
      .setRight(scene.right)
      .setTop(scene.top)

    const player = new ControllableSprite()
      .setWidth(32)
      .setHeight(32)
      .setColor(Color.Yellow)
      .setSolid()

    const loot = Videogame.sprite()
      .setWidth(16)
      .setHeight(16)
      .setCenter(scene.center)
      .setColor(Color.Green)
      .setSolid()

    const SECRET_CHEAT_CODE = [
      Command.LEFT,
      Command.RIGHT,
      Command.LEFT,
      Command.RIGHT,
      Command.B,
      Command.A
    ]

    const skeleton = {
      state: {
        scene,
        starfield,
        score,
        player,
        loot
      }
    }

    player.update = () => {
      if (player.controller.didPerform(SECRET_CHEAT_CODE)) {
        player.center = loot.center
      }

      if (player.controller.keyDown(Command.A)) {
        player.step = 4
      } else {
        player.step = 2
      }
    }

    loot.onCollision = () => {
      skeleton.addScorePoint()
      skeleton.respawnLoot()
    }

    skeleton.start = () => {
      skeleton.setupScene()
      skeleton.resetGame()

      Videogame.setName(gameTitleText || 'Untitled Game')
      Videogame.init(scene)
    }

    skeleton.setupScene = () => {
      scene.add(starfield)
      scene.add(score)
      scene.add(player)
      scene.add(loot)
    }

    skeleton.resetGame = () => {
      score.text = 0
    }

    skeleton.respawnLoot = () => {
      loot.x = Videogame.random(scene.width)
      loot.y = Videogame.random(scene.height)
    }

    skeleton.addScorePoint = () => {
      score.text++
    }

    // easily debug the game from the console via $debug.game.whatever

    return skeleton
  }
}

// make sure the DOM loads before the game is started
function boot () {
  const game = SkeletonGame.create('Advanced Videogame Skeleton')

  // this part is optional but useful for debugging the game from the browser console
  // --
  window.$debug = window.$debug || {}
  window.$debug.game = game

  // this part is also optional but gives you the ability to work with the Videogame API
  // from the browser console
  window.$debug.vg = {
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
    Videogame,
    ClickableSprite,
    CursorSprite,
    ControllableSprite,
    Fog,
    JumperSprite,
    Starfield
  }

  // --

  // start the game
  game.start()
}

document.addEventListener('DOMContentLoaded', boot, false)
